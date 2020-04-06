/**
 * STYLED COMPONENTS FOR
 * DRINK'S CATEGORIES
 */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  clrMainBG,
  clrPrimary,
  clrFntDark,
} from '../../constants/colorPalette';

export const Container = styled.View`
  flex: 1;
  background: ${clrMainBG};
  padding: 10px;
`;

export const CategoryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 30px;
`;

export const Category = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const CategoryButton = styled(RectButton)`
  margin-top: 0px;
  margin-bottom: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: ${clrPrimary};
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const CategoryButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${clrFntDark};
  text-transform: uppercase;
`;
