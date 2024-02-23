import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 380px;
  height: 460px;
  padding: 28px 36px 36px;

  border-radius: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Logo = styled.img`
  fill: ${({ theme }) => theme.colors.logo};
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Img = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 18px;
`;

export const ContainerLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 380px;
  height: 8px;
  margin-bottom: 62px;

  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadows.line};
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-color: 8px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadows.line};

  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing(15)};
  width: 62px;
  height: 62px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
`;

export const Button = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${props =>
    props.$isFollowing ? props.theme.colors.green : props.theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;
