// ./firebase/useShow.js
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const useShow = (showId) => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "shows", showId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setShow(docSnap.data());
        } else {
          setShow(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (showId) {
      fetchShow();
    } else {
      setLoading(false);
    }
  }, [showId]);

  return { show, loading, error };
};

export default useShow;
