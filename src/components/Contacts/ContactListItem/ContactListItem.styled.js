import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const ContactName = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: Roboto;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-weight: 500;
  justify-content: flex-start;
`;

export const ContactNumber = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-left: 10px;
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
