import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
`;

export const List = styled.ul`
  display: ${props => (props.$isVisible ? 'block' : 'none')};

  width: 120px;

  background: ${({ theme }) => theme.colors.backgNav};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    width: 196px;
  }
`;

export const Item = styled.li`
  padding: 8px 5px;

  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;

  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  color: ${({ theme }) => theme.colors.light};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 768px) {
    padding: 14px 28px;

    font-size: 20px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  width: 120px;
  height: 35px;

  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgNav};
  }

  @media (min-width: 768px) {
    width: 196px;
    height: 50px;

    font-weight: 600;
    font-size: 18px;
  }
`;
