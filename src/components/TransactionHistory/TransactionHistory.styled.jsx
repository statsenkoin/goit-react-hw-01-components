import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  max-width: 768px;
  text-align: center;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
`;
export const Head = styled.thead`
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textLight};
`;
export const HeadRow = styled.tr`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;
export const HeadRowItem = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Body = styled.tbody`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const BodyRow = styled.tr`
  height: 50px;
  background-color: ${({ theme, index }) => {
    return index % 2 === 0
      ? theme.colors.backgroundMain
      : theme.colors.backgroundSecondary;
  }};
`;
export const BodyRowItem = styled.th`
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
