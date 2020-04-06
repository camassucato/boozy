/**
 * STYLED COMPONENTS FOR
 * DRINK SEARCH
 */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  clrPrimary,
  clrMainBG,
  clrError,
  clrFntDark,
  clrBG1,
} from '../../constants/colorPalette';

export const Container = styled.View`
  flex: 1;
  background: ${clrMainBG};
  padding: 10px;
`;

export const Form = styled.View`
  padding: 10px;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background: ${clrBG1};
  color: ${clrFntDark};
  font-size: 16px;
  height: 50px;
  border-radius: 4px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  width: 60px;
  align-items: center;
  background: ${clrPrimary};
  border-radius: 4px;
  margin-left: 10px;
  padding: 5px 15px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const ClearButton = styled(RectButton)`
  justify-content: center;
  width: 60px;
  align-items: center;
  background: ${clrError};
  border-radius: 4px;
  margin-left: 10px;
  padding: 5px 15px;
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
  color: ${clrFntDark};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const DrinkCategory = styled.Text`
  font-size: 16px;
  color: ${clrFntDark};
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
