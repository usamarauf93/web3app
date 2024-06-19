// utils.js

export const getRandomTime = () => {
    // Generate random hours, minutes, and seconds between 0 and 59
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
  
    // Format time with leading zeros if needed
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  export const startCountdown = (initialTime, onEnd) => {
    let [hours, minutes, seconds] = initialTime.split(':').map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
  
        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;
  
        let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
        // Optionally, you can update the state or perform any action with formattedTime
        if (onEnd) onEnd(formattedTime);
      } else {
        clearInterval(interval);
        if (onEnd) onEnd('00:00:00');
        // Optionally, you can perform an action when countdown reaches zero
        // For example: redirect user, display a message, etc.
      }
    }, 1000);
  
    return interval;
  };
  