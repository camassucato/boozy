/**
 * STYLED COMPONENTS FOR
 * DRINK CATEGORY LIST
 */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  clrPrimary,
  clrFntDark,
  clrBG1,
  clrBG2,
} from '../../constants/colorPalette';

export const Container = styled.View`
  flex: 1;
  background: ${clrFntDark};
  padding: 10px;
`;

export const DrinkList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Drink = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const DrinkImg = styled.Image`
  width: 82px;
  height: 82px;
  border-radius: 50px;
  background: ${clrBG1};
`;

export const DrinkName = styled.Text`
  font-size: 22px;
  color: ${clrBG2};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const DrinkDetailsButton = styled(RectButton)`
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: stretch;
  border-radius: 4px;
  background: ${clrPrimary};
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const DrinkDetailsButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${clrFntDark};
  text-transform: uppercase;
`;
