import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  align-items: center;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
`;
