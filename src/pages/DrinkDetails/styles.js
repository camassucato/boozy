/**
 * STYLED COMPONENTS FOR
 * DRINK DETAILS
 */
import styled from 'styled-components/native';
import { clrMainBG, clrFntDark } from '../../constants/colorPalette';

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: ${clrMainBG};
`;

export const Drink = styled.View`
  align-items: center;
  margin: 20px 20px 30px;
`;

export const DrinkInfo = styled.View`
  margin: 0 20px 00px;
`;

export const DrinkDetailImg = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DrinkName = styled.Text`
  font-size: 26px;
  color: ${clrFntDark};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const DrinkCategory = styled.Text`
  font-size: 20px;
  color: ${clrFntDark};
  margin-top: 4px;
  text-align: center;
`;

export const DrinkInstructions = styled.Text`
  font-size: 18px;
  color: ${clrFntDark};
  margin-top: 15px;
  text-align: justify;
`;

export const DrinkIngredients = styled.Text`
  font-size: 18px;
  color: ${clrFntDark};
  margin-top: 0;
  text-align: left;
`;
