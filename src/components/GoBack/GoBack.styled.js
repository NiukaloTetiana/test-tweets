import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;

  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
