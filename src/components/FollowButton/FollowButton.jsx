import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Button } from './FollowButton.styled';

export const FollowButton = ({ user, initialIsFollowing, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = useLocalStorage(
    `following_${user}`,
    initialIsFollowing
  );

  const handleFollowClick = () => {
    setIsFollowing(prevIsFollowing => !prevIsFollowing);
    if (onFollowToggle) {
      onFollowToggle(isFollowing);
    }
  };

  return (
    <Button type="button" onClick={handleFollowClick} isFollowing={isFollowing}>
      {isFollowing ? 'Following' : 'Follow'}
    </Button>
  );
};
