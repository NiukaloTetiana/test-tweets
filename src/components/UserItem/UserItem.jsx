import { useEffect, useState } from 'react';

import logotype from '../../assets/logotype.svg';
import picture_1x from '../../assets/images/picture_1x.png';
import picture_2x from '../../assets/images/picture_2x.png';

import {
  Item,
  Img,
  Logo,
  Avatar,
  Picture,
  Text,
  Info,
  Button,
  ContainerAvatar,
  ContainerLine,
} from './UserItem.styled';

export const UserItem = ({ avatar, user, tweets, followers }) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setFollowersCount(prevCount => prevCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    localStorage.setItem(`following_${user}`, isFollowing.toString());
  }, [isFollowing, user]);

  return (
    <Item>
      <Logo src={logotype} alt="Logo" width="76" height="22" loading="lazy" />

      <Picture>
        <source
          srcSet={`${picture_1x} 1x, ${picture_2x} 2x`}
          type="image/png"
          loading="lazy"
        />
        <Img src={picture_1x} alt="Picture background" />
      </Picture>

      <ContainerLine>
        <ContainerAvatar>
          <Avatar src={avatar} alt={user} width="60" loading="lazy" />
        </ContainerAvatar>
      </ContainerLine>

      <Info>
        <Text>{tweets.toLocaleString()} TWEETS</Text>
        <Text>{followersCount.toLocaleString('en-US')} FOLLOWERS</Text>
      </Info>
      <Button type="button" value={isFollowing} onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Item>
  );
};
