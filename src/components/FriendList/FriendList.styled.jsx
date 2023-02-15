import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  width: 300px;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 5px;
`;
export const Status = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
`;
