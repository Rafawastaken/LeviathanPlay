// ./firebase/useSearchMovies.js
import { useEffect, useState } from "react";
import { db } from "./firebase"; // Ensure this path is correct based on your project structure
import { collection, query, where, getDocs, limit } from "firebase/firestore";

const useSearchMovies = (searchQuery) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomMovies = async () => {
    try {
      console.log("Fetching random movies...");
      setLoading(true);
      const moviesRef = collection(db, "movies");
      const randomQuery = query(moviesRef, limit(20)); // Limit to 20 random movies
      const querySnapshot = await getDocs(randomQuery);
      const randomMovies = [];
      querySnapshot.forEach((doc) => {
        randomMovies.push({ id: doc.id, ...doc.data() });
      });
      console.log(`Fetched ${randomMovies.length} random movies.`);
      setMovies(randomMovies);
    } catch (err) {
      console.error("Error fetching random movies:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchedMovies = async (searchTerm) => {
    try {
      console.log(`Searching for movies with query: "${searchTerm}"`);
      setLoading(true);
      const moviesRef = collection(db, "movies");
      const searchQueryLower = searchTerm.toLowerCase();

      // Split the search term into individual words
      const searchTerms = searchQueryLower.split(/\s+/).filter(Boolean);

      // Firestore allows a maximum of 10 values for 'array-contains-any'
      const searchTermsLimited = searchTerms.slice(0, 10);

      const searchQ = query(
        moviesRef,
        where("keywords", "array-contains-any", searchTermsLimited),
        limit(30) // Adjust the limit as needed
      );

      const querySnapshot = await getDocs(searchQ);
      const searchedMovies = [];
      querySnapshot.forEach((doc) => {
        searchedMovies.push({ id: doc.id, ...doc.data() });
      });
      console.log(`Found ${searchedMovies.length} movies matching the search.`);
      setMovies(searchedMovies);
    } catch (err) {
      console.error("Error fetching searched movies:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(`Search query changed: "${searchQuery}"`);
    if (searchQuery && searchQuery.length >= 3) {
      fetchSearchedMovies(searchQuery);
    } else {
      fetchRandomMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { movies, loading, error };
};

export default useSearchMovies;
