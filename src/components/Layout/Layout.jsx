import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RiHomeGearLine } from 'react-icons/ri';
import { GiHummingbird } from 'react-icons/gi';

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
                <RiHomeGearLine />
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/tweets">
                <GiHummingbird />
                Tweets
              </StyledLink>
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
