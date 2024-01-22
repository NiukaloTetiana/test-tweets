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
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin: 0;
`;
