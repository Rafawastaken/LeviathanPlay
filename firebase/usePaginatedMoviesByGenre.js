// ./hooks/usePaginatedMoviesByGenre.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";

/**
 * Custom hook to fetch movies by genre with pagination and ordering.
 * @param {string | number} genreId - The ID of the genre.
 * @param {number} pageSize - Number of movies to fetch per batch.
 * @returns {object} - Contains movies array, loading state, error state, and a function to fetch the next batch.
 */
const usePaginatedMoviesByGenre = (genreId, pageSize = 20) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  /**
   * Fetches the next batch of movies.
   * @param {boolean} loadMore - Indicates whether to load more movies.
   */
  const fetchMoreMovies = async (loadMore = false) => {
    if (loading) return; // Prevent multiple simultaneous fetches
    if (loadMore && !hasMore) return; // No more movies to fetch

    setLoading(true);
    try {
      const numericGenreId = parseInt(genreId, 10);
      const moviesCollection = collection(db, "movies");

      let moviesQuery = query(
        moviesCollection,
        where("genre_ids", "array-contains", numericGenreId),
        orderBy("tmdb_id", "desc"), // Ordering by tmdb_id descending
        limit(pageSize)
      );

      if (loadMore && lastDoc) {
        moviesQuery = query(
          moviesCollection,
          where("genre_ids", "array-contains", numericGenreId),
          orderBy("tmdb_id", "desc"),
          startAfter(lastDoc),
          limit(pageSize)
        );
      }

      const querySnapshot = await getDocs(moviesQuery);
      const fetchedMovies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMovies((prevMovies) =>
        loadMore ? [...prevMovies, ...fetchedMovies] : fetchedMovies
      );

      if (querySnapshot.docs.length > 0) {
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      if (fetchedMovies.length < pageSize) {
        setHasMore(false); // No more movies to fetch
      }
    } catch (err) {
      console.error("Error fetching movies by genre with pagination:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset state when genreId changes
    setMovies([]);
    setLastDoc(null);
    setHasMore(true);
    setError(null);
    fetchMoreMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreId]);

  return { movies, loading, error, fetchMoreMovies, hasMore };
};

export default usePaginatedMoviesByGenre;
