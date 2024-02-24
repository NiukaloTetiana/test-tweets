import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 22px 10px;

  @media (min-width: 768px) {
    margin: 0 145px 20px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
