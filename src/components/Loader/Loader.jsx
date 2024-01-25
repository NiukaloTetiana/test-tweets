import RingLoader from 'react-spinners/RingLoader';
import { LoderBeckdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoderBeckdrop>
      <RingLoader
        color="#02a7e3e7"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </LoderBeckdrop>
  );
};
