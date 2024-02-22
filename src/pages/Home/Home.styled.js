import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('https://faunistics.com/wp-content/uploads/2019/11/3-1.jpg');
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.spacing(5)};
  height: 450px;
  width: 650px;
  display: flex;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 36px;
  padding: 26px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  width: 750px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.backgNav};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const TitleDesc = styled.h2`
  color: ${({ theme }) => theme.colors.backgNav};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const TitleImg = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Item = styled.li`
  padding-bottom: 10px;
`;
