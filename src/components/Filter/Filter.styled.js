import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Roboto;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Input = styled.input`
  width: 320px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  outline: transparent;

  color: ${({ theme }) => theme.colors.dark};
  font-family: Roboto;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-weight: 500;

  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray};
    text-shadow: ${({ theme }) => theme.shadows.text};
  }
`;
