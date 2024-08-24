import { useState, useEffect } from 'react';

const useInterval = (callback, delay) => {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(callback, delay);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [callback, delay]);

  return intervalId;
};

export default useInterval;
