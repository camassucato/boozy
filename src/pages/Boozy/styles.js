import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Form = styled.View`
  padding: 10px;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #c4c4c4;
`;

export const Input = styled.TextInput`
  background: #eee;
  flex: 1;
  height: 50px;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ceceec;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #43a047;
  border-radius: 4px;
  margin-left: 10px;
  padding: 5px 15px;
`;

export const ClearButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f4511e;
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
  width: 74px;
  height: 74px;
  border-radius: 50px;
  background: #eee;
`;

export const DrinkName = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const DrinkCategory = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: 4px;
  text-align: center;
`;
export const DrinkDetailsButton = styled(RectButton)`
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: stretch;
  border-radius: 4px;
  background: #039be5;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const DrinkDetailsButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
