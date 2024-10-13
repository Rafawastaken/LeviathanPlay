// ./hooks/useMovie.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const useMovie = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setError(new Error("No movie ID provided"));
      setLoading(false);
      return;
    }

    const fetchMovie = async () => {
      try {
        const movieDocRef = doc(db, "movies", movieId);
        const movieDoc = await getDoc(movieDocRef);

        if (movieDoc.exists()) {
          setMovie(movieDoc.data());
        } else {
          throw new Error("Movie not found");
        }
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { movie, loading, error };
};

export default useMovie;
