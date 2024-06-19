import useCountdown from '../hooks/useCountdown'; // Adjust the path as necessary

const CountdownComponent = ({ initialTime }) => {
  const countdown = useCountdown(initialTime);

  return  countdown ;
};

export default CountdownComponent;
