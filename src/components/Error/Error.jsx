import { Wrapper, Title } from './Error.styled';
import { selectError } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <Wrapper>
      <Title>Oops... Sorry, something went wrong. {error}.</Title>
    </Wrapper>
  );
};
