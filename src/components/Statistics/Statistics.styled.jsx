import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';
import { themeLight } from 'constants/theme';

const { backgroundMain, shadow, textMain, textLight } = themeLight.colors;

export const Card = styled.section`
  background-color: ${backgroundMain};
  box-shadow: ${shadow} 0px 3px 3px -2px, ${shadow} 0px 3px 4px 0px,
    ${shadow} 0px 1px 8px 0px;
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 3em;
  font-weight: 700;
  color: ${textMain};
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
  color: ${textLight};
`;
export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${textLight};
`;
