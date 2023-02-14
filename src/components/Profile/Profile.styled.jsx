import styled from '@emotion/styled';
import { themeLight } from 'constants/theme';

const {
  textMain,
  textSecondary,
  textLight,
  backgroundMain,
  backgroundSecondary,
  border,
  shadow,
} = themeLight.colors;

export const Card = styled.div`
  width: 300px;
  border: 1px solid ${border};
  border-radius: 10px;
  background-color: ${textLight};
  overflow: hidden;

  box-shadow: ${shadow} 0px 3px 3px -2px, ${shadow} 0px 3px 4px 0px,
    ${shadow} 0px 1px 8px 0px;
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
  border: 1px solid ${border};
  border-radius: 50%;
  background-color: ${backgroundMain};
}
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  color: ${textMain};
`;
export const Tag = styled.p`
  color: ${textSecondary};
`;
export const Location = styled.p`
  color: ${textSecondary};
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
  background-color: ${backgroundSecondary};
  border: 1px solid ${border};
`;
export const Label = styled.span`
  color: ${textSecondary};
`;
export const Quantity = styled.span`
  font-weight: 700;
  color: ${textMain};
`;
