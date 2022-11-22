import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null)

  const fetchSteps = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) {
        throw new Error("Something went wrong. Refresh the page and try again.")
      }
      for (const key in data) {
        setFetchedData(data[key]);
      }
    } catch (error) {
      setError(error.message)
    }

  }, [url]);

  useEffect(() => {
    fetchSteps();
  }, [fetchSteps]);

  return error ? error : fetchedData;
};

export default useFetch;
