import {
  Wrapper,
  Container,
  ContainerText,
  Title,
  TitleDesc,
  TitleImg,
  Text,
  List,
  Item,
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
          <Item>
            <Span>Follow/Following: </Span> Connect with other users using the
            button follow or following them.
          </Item>
          <Item>
            <Span>Explore: </Span>Discover new users and trending tweets.
          </Item>
          <Item>
            <Span>Filter by Categories: </Span> Utilize the capability to filter
            content based on relevant categories.
          </Item>
        </List>
      </ContainerText>

      <Wrapper>
        <TitleImg>Enjoy your Twitts experience!</TitleImg>
      </Wrapper>
    </Container>
  );
};

export default Home;
