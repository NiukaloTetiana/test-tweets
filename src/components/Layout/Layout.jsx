import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RiHomeHeartFill } from 'react-icons/ri';

import {
  Container,
  StyledHeader,
  NavItem,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <StyledHeader>
        <Navigation>
          <NavList>
            <NavItem>
              <StyledLink to="/">
                <RiHomeHeartFill />
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/tweets">Tweets</StyledLink>
            </NavItem>
          </NavList>
        </Navigation>
      </StyledHeader>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
