import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title, Form, Input, Submit } from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositories</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Browse repo..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
}
