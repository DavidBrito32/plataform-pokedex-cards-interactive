import { useState, useEffect } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((result) => {
            setData(result);
            setLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
