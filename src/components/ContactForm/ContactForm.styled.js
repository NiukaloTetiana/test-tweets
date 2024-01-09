import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 0.25em;
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
`;
export const Button = styled.button`
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};

  margin: 8px;
  padding: 10px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grine};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.1);
  }
`;
