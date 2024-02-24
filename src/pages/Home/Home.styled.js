import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('https://faunistics.com/wp-content/uploads/2019/11/3-1.jpg');
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  height: 320px;
  width: 250px;
  display: flex;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 450px;
    width: 650px;

    border-radius: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 36px;
    flex-direction: row;
    flex-wrap: nowrap;

    padding: 26px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 250px;

  @media (min-width: 768px) {
    width: 620px;

    gap: 26px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};

  color: ${({ theme }) => theme.colors.backgNav};

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TitleDesc = styled.h2`
  color: ${({ theme }) => theme.colors.backgNav};
  text-shadow: ${({ theme }) => theme.shadows.text};

  font-weight: 500;
  font-size: 18px;

  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const TitleImg = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};

  width: 220px;

  font-weight: 500;
  font-size: 20px;

  @media (min-width: 768px) {
    width: 100%;

    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.6;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.6;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Item = styled.li`
  padding-bottom: 10px;
`;
