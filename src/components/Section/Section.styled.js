import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: auto;
  padding: 20px;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 32px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin: 0;
`;
