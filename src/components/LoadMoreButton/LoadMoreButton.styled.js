import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    transform: scale(1.1);
  }
`;
