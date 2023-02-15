import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;
export const UserDescription = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 120px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  border-radius: 50%;
}
`;
export const Name = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
`;
export const Tag = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const Location = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Label = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const Quantity = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
`;
