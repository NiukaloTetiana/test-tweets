import { useState } from 'react';

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

export const UserItem = () => {
  const [followersCount, setFollowersCount] = useState(100500);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setFollowersCount(prevCount => prevCount + 1);
    }
    setIsFollowing(!isFollowing);
  };

  const data = {
    createdAt: '2024-02-20T19:03:30.987Z',
    user: 'Mrs. Raquel Koelpin',
    tweets: 787,
    followers: followersCount,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg',
    id: '1',
  };

  return (
    <Item key={data.id}>
      <Logo src={logotype} alt="Logo" width="76" height="22" loading="lazy" />

      <Picture>
        <source
          srcSet={`${picture_1x}, ${picture_2x} 2x`}
          type="image/png"
          loading="lazy"
        />
        <Img src={picture_1x} alt="Picture background" />
      </Picture>

      <ContainerLine>
        <ContainerAvatar>
          <Avatar src={data.avatar} alt={data.user} width="60" loading="lazy" />
        </ContainerAvatar>
      </ContainerLine>

      <Info>
        <Text>{data.tweets} TWEETS</Text>
        <Text>{data.followers.toLocaleString('en-US')} FOLLOWERS</Text>
      </Info>
      <Button type="button" value={isFollowing} onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Item>
  );
};
