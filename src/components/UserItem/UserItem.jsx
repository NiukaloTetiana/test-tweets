import logotype from '../../assets/logotype.svg';
import picture_1x from '../../assets/images/picture_1x.png';
import picture_2x from '../../assets/images/picture_2x.png';
import { FollowButton } from '../FollowButton/FollowButton';

import {
  Item,
  Img,
  Logo,
  Avatar,
  Text,
  Info,
  ContainerAvatar,
  ContainerLine,
} from './UserItem.styled';

export const UserItem = ({ avatar, user, tweets, followers }) => {
  const followersCount = followers;

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
        <Text>{followersCount.toLocaleString('en-US')} FOLLOWERS</Text>
      </Info>
      <FollowButton user={user} initialIsFollowing={false} />
    </Item>
  );
};
