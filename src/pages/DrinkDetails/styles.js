/**
 * STYLED COMPONENTS FOR
 * DRINK DETAILS
 */
import styled from 'styled-components/native';
import { clrFntDark, clrBG2 } from '../../constants/colors';

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: ${clrFntDark};
`;

export const Drink = styled.View`
  align-items: center;
  margin: 20px 20px 30px;
`;

export const DrinkDetailImg = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DrinkName = styled.Text`
  font-size: 24px;
  color: ${clrBG2};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const DrinkCategory = styled.Text`
  font-size: 18px;
  color: ${clrBG2};
  margin-top: 4px;
  text-align: center;
`;

export const DrinkInstructions = styled.Text`
  font-size: 16px;
  color: ${clrBG2};
  margin-top: 15px;
  text-align: justify;
`;
