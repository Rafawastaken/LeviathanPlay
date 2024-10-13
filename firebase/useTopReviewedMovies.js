import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const useTopReviewedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopReviewedMovies = async () => {
      try {
        const moviesRef = collection(db, "movies");
        const q = query(moviesRef, orderBy("rating", "desc"), limit(100));
        const querySnapshot = await getDocs(q);
        const moviesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovies(moviesList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopReviewedMovies();
  }, []);

  return { movies, loading, error };
};

export default useTopReviewedMovies;
