// ./hooks/useGenres.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresCollection = collection(db, "genres");
        const genresSnapshot = await getDocs(genresCollection);
        const genresList = genresSnapshot.docs.map((doc) => ({
          id: doc.id, // This should correspond to genre_id
          ...doc.data(),
        }));
        setGenres(genresList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres, loading, error };
};

export default useGenres;
