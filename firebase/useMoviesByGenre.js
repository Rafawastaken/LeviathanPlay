// ./hooks/useMoviesByGenre.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, query, where, limit, getDocs } from "firebase/firestore";

const useMoviesByGenre = (genreId, limitCount = 20) => {
  // Default limit to 20
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const numericGenreId = parseInt(genreId, 10); // Convert genreId to number
        const moviesCollection = collection(db, "movies");

        // Use genre_ids field for querying
        const moviesQuery = query(
          moviesCollection,
          where("genre_ids", "array-contains", numericGenreId), // Use numericGenreId
          limit(limitCount)
        );

        const querySnapshot = await getDocs(moviesQuery);
        const moviesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMovies(moviesList);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genreId, limitCount]);

  return { movies, loading, error };
};

export default useMoviesByGenre;
