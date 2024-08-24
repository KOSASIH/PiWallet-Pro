import { useState, useEffect } from 'react';

const useAsync = (asyncFunction, initialValue) => {
  const [result, setResult] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const executeAsyncFunction = async () => {
      setLoading(true);
      try {
        const response = await asyncFunction();
        setResult(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    executeAsyncFunction();
  }, [asyncFunction]);

  return { result, error, loading };
};

export default useAsync;
