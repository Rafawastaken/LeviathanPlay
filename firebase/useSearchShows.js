// ./firebase/useSearchShows.js
import { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust path if needed
import { collection, query, where, getDocs, limit } from "firebase/firestore";

const useSearchShows = (searchQuery) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch random shows if there's no search query or the query is too short
  const fetchRandomShows = async () => {
    try {
      console.log("[INFO] Fetching random shows from Firestore...");
      setLoading(true);

      const showsRef = collection(db, "shows");

      // Limit to 20 random docs (not truly random, but a limiting example)
      const randomQuery = query(showsRef, limit(20));
      const querySnapshot = await getDocs(randomQuery);

      const randomShows = [];
      querySnapshot.forEach((doc) => {
        randomShows.push({ id: doc.id, ...doc.data() });
      });

      console.log(`[INFO] Fetched ${randomShows.length} random shows.`);
      setShows(randomShows);
    } catch (err) {
      console.error("[ERROR] Fetching random shows:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Search for shows that contain at least one of the user’s search terms in meta_data.keywords
  const fetchSearchedShows = async (searchTerm) => {
    try {
      console.log(`[INFO] Searching for shows with query: "${searchTerm}"`);
      setLoading(true);

      const showsRef = collection(db, "shows");
      const searchQueryLower = searchTerm.toLowerCase();

      // Split the search term into individual words
      const searchTerms = searchQueryLower.split(/\s+/).filter(Boolean);

      // Firestore allows max 10 values for 'array-contains-any', but your code suggests slicing to 50
      // Adjust as needed if you expect many words
      const searchTermsLimited = searchTerms.slice(0, 50);

      // We search in "meta_data.keywords" using 'array-contains-any'
      const searchQ = query(
        showsRef,
        where("meta_data.keywords", "array-contains-any", searchTermsLimited),
        limit(30) // Adjust limit as needed
      );

      const querySnapshot = await getDocs(searchQ);
      const searchedShows = [];
      querySnapshot.forEach((doc) => {
        searchedShows.push({ id: doc.id, ...doc.data() });
      });

      console.log(
        `[INFO] Found ${searchedShows.length} shows matching the search.`
      );
      setShows(searchedShows);
    } catch (err) {
      console.error("[ERROR] Fetching searched shows:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(`[INFO] Search query changed: "${searchQuery}"`);
    if (searchQuery && searchQuery.length >= 3) {
      fetchSearchedShows(searchQuery);
    } else {
      fetchRandomShows();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { shows, loading, error };
};

export default useSearchShows;
