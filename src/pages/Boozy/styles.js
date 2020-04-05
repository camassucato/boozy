/**
 * STYLED COMPONENTS FOR
 * BOOZY MAIN VIEW
 */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { clrPrimary, clrFntDark } from '../../constants/colorPalette';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 50px;
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
