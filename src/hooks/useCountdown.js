import { useState, useEffect } from 'react';
import { getRandomTime, startCountdown } from '../utils/utils'; // Adjust the path as necessary

const useCountdown = (initialTime) => {
  const [countdown, setCountdown] = useState(initialTime || getRandomTime());

  useEffect(() => {
    const interval = startCountdown(countdown, setCountdown);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [countdown]);

  return countdown;
};

export default useCountdown;
