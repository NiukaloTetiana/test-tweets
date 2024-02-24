import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('https://www.telecom-paris.fr/wp-content-EvDsK19/uploads/2022/04/404-roserodionova-freepik-768x403.png');
  background-color: ${({ theme }) => theme.colors.backgNav};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 50px;
  font-weight: 700;

  text-shadow: ${({ theme }) => theme.shadows.text};
  color: ${({ theme }) => theme.colors.orange};

  margin-bottom: 28px;
`;
