import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 380px;
  height: 460px;
  /* padding: 28px 36px 36px; */

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

export const Picture = styled.div``;

export const Img = styled.img`
  margin: 28px 36px 0;
  width: 308px;
  height: 168px;
`;

export const ContainerLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 380px;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadows.line};
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;

  border: 8px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(15)};
  box-shadow: ${({ theme }) => theme.shadows.line};

  width: 64px;
  height: 64px;
`;

export const Avatar = styled.img`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing(15)};
  width: 56px;
  height: 56px;
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
  background-color: ${props => (props.value ? '#5CD3A8' : '#ebd8ff')};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;
