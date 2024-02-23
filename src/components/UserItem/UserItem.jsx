import { useEffect, useState } from 'react';
import logotype from '../../assets/logotype.svg';
import picture_1x from '../../assets/images/picture_1x.png';
import picture_2x from '../../assets/images/picture_2x.png';

import {
  Item,
  Img,
  Logo,
  Avatar,
  Text,
  Info,
  ContainerAvatar,
  ContainerLine,
  Button,
} from './UserItem.styled';

export const UserItem = ({
  id,
  avatar,
  user,
  tweets,
  followers,
  handleFollowClick,
  followersCount,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (followersCount.includes(id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [followersCount, id]);

  return (
    <Item>
      <Logo src={logotype} alt="Logo" width="76" height="22" loading="lazy" />

      <picture>
        <source
          srcSet={`${picture_1x} 1x, ${picture_2x} 2x`}
          type="image/png"
          loading="lazy"
        />
        <Img src={picture_1x} alt="Picture background" />
      </picture>

      <ContainerLine>
        <ContainerAvatar>
          <Avatar src={avatar} alt={user} width="60" loading="lazy" />
        </ContainerAvatar>
      </ContainerLine>

      <Info>
        <Text>{tweets.toLocaleString()} TWEETS</Text>
        <Text>
          {(isFollowing ? followers + 1 : followers).toLocaleString('en-US')}{' '}
          FOLLOWERS
        </Text>
      </Info>

      <Button
        type="button"
        onClick={() => {
          handleFollowClick(id);
        }}
        $isFollowing={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Item>
  );
};
