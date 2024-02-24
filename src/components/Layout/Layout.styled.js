import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  margin-bottom: 20px;

  border-radius: ${({ theme }) => theme.spacing(4)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  background-color: ${({ theme }) => theme.colors.backgNav};
`;

export const Navigation = styled.nav`
  padding: 10px 25px;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const NavList = styled.ul`
  font-size: 20px;
  font-weight: 500;

  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;

    display: flex;
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  text-shadow: ${({ theme }) => theme.shadows.text};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.light};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
