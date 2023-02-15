import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 4px;
  overflow: hidden;
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 3em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
  text-transform: uppercase;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
`;
export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight};
`;
