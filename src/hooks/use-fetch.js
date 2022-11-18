import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchSteps = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    for (const key in data) {
      setFetchedData(data[key]);
    }
  }, [url]);

  useEffect(() => {
    fetchSteps();
  }, [fetchSteps]);

  return fetchedData;
};

export default useFetch;
