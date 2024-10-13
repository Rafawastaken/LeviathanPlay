import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const useRecentlyAddedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentlyAddedMovies = async () => {
      try {
        const moviesRef = collection(db, "movies");
        const q = query(moviesRef, orderBy("date_added", "desc"), limit(100));
        const querySnapshot = await getDocs(q);
        const moviesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovies(moviesList);
      } catch (err) {
        console.error("Error fetching recently added movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyAddedMovies();
  }, []);

  return { movies, loading, error };
};

export default useRecentlyAddedMovies;
