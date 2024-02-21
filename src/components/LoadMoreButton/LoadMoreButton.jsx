import { Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};
