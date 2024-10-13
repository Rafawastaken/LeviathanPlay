// ./firebase/useRandomMovies.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, limit } from "firebase/firestore";

const useRandomMovies = (limitCount = 10) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const moviesCollection = collection(db, "movies");
        const moviesQuery = query(moviesCollection, limit(limitCount));
        const querySnapshot = await getDocs(moviesQuery);
        const moviesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovies(moviesList);
      } catch (err) {
        console.error("Error fetching random movies:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMovies();
  }, [limitCount]);

  return { movies, loading, error };
};

export default useRandomMovies;
