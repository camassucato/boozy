/**
 * STYLED COMPONENTS FOR
 * BOOZY MAIN VIEW
 */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  clrPrimary,
  clrFntDark,
  clrMainBG,
} from '../../constants/colorPalette';

export const Container = styled.View`
  flex: 1;
  background: ${clrMainBG};
  padding: 50px;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchButton = styled(RectButton)`
  border-radius: 10px;
  background: ${clrPrimary};
  height: 50px;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const CategoryButton = styled(RectButton)`
  border-radius: 10px;
  background: ${clrPrimary};
  height: 50px;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const GoButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${clrFntDark};
`;
