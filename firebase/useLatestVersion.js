import { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the import path if necessary
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const useLatestVersion = () => {
  const [latestVersion, setLatestVersion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const versionsCollection = collection(db, "versions");
        const q = query(
          versionsCollection,
          orderBy("release_date", "desc"),
          limit(1)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const latestVersionDoc = querySnapshot.docs[0];
          setLatestVersion(latestVersionDoc.data());
        } else {
          throw new Error("No versions found");
        }
      } catch (err) {
        console.error("Error fetching latest version:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVersion();
  }, []);

  return { latestVersion, loading, error };
};

export default useLatestVersion;
