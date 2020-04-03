import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoImg from '../../assets/drunk.png';
import { Container, Form, Input, SubmitButton, Logo } from './styles';

export default function Boozy() {
  return (
    <>
      <Container>
        <Form>
          <Logo source={LogoImg} />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search Drinks"
            placeholderTextColor="#a4a4a4"
          />
          <SubmitButton>
            <Icon name="search" size={30} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
