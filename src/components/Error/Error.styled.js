import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(11, 73, 109, 0.451);
  background-image: url('https://st2.depositphotos.com/30163966/43944/i/600/depositphotos_439441096-stock-photo-a-vintage-dial-telephone-handset.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pinkBg};
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin: 0;
`;
