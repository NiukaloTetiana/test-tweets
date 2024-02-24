import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;

  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
