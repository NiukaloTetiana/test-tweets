import RingLoader from 'react-spinners/RingLoader';
import { LoderBeckdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoderBeckdrop>
      <RingLoader
        color="#5736A3"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </LoderBeckdrop>
  );
};
