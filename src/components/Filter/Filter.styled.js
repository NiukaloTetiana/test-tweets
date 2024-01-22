import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Input = styled.input`
  width: 320px;
  padding: 13px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.spacing(4)};
  outline: transparent;

  color: ${({ theme }) => theme.colors.blue};
  font-size: 22px;
  text-shadow: ${({ theme }) => theme.shadows.text};

  &::placeholder {
    font-size: 18px;
    font-style: italic;
    opacity: 1;

    color: ${({ theme }) => theme.colors.gray};
    text-shadow: none;
  }
`;
