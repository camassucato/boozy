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
  background: #46dd;
  border-radius: 4px;
  margin-left: 10px;
  padding: 5px 15px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;
