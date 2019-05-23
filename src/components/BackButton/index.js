import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

export default function BackButton() {
  return (
    <Container>
      <Icon name="arrow-back" size={18} color={'#7159c1'} />
    </Container>
  );
}
