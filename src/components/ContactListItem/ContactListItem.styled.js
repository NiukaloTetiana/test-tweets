import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const ContactName = styled.p`
  justify-content: flex-start;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const ContactNumber = styled.span`
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-left: 10px;
`;

export const Button = styled.button`
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.shadows.text};

  margin: 8px;
  padding: 11px;
  background-color: ${({ theme }) => theme.colors.pinkBg};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
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
