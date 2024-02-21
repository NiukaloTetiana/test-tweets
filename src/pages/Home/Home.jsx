// import { UserItem } from 'components/UserItem/UserItem';

import {
  Wrapper,
  Container,
  ContainerText,
  Title,
  TitleDesc,
  TitleImg,
  Text,
  List,
  Span,
} from 'pages/Home/Home.styled';

const Home = () => {
  return (
    <Container>
      <ContainerText>
        <Title>Welcome to Twittes!</Title>
        <TitleDesc>About</TitleDesc>
        <Text>
          Twitts is a social media platform where users can share their
          thoughts, updates, and interact with others. It's designed to provide
          a simple and intuitive experience for users to connect and stay
          updated on the latest tweets.
        </Text>
        <TitleDesc>Features</TitleDesc>
        <List>
          <li>
            <Span>Follow/Unfollow: </Span> Connect with other users by following
            or unfollowing them.
          </li>
          <li>
            <Span>Explore: </Span>Discover new users and trending tweets.
          </li>
        </List>
        <TitleDesc>Getting Started</TitleDesc>
        <Text>
          To get started, explore the user profiles. Use the navigation bar to
          access sections of the application.
        </Text>
      </ContainerText>

      <Wrapper>
        <TitleImg>Enjoy your Twitts experience!</TitleImg>
      </Wrapper>
    </Container>
  );
};

export default Home;
