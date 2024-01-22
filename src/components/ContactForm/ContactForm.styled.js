import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: ${({ theme }) => theme.spacing(4)};
  padding: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Input = styled.input`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.shadows.text};

  align-items: center;
  width: 320px;
  padding: 13px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.pink};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.spacing(4)};
  outline: transparent;
`;

export const Button = styled.button`
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.shadows.text};
  min-width: 140px;
  margin-top: 10px;
  padding: 11px;

  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.pinkBg};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    transform: scale(1.1);
  }
`;
