import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 5px;
  width: 120px;
  height: 35px;

  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 196px;
    height: 50px;

    padding: 14px 28px;

    font-weight: 600;
    font-size: 18px;
  }
`;
