import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Repository from '~/components/Repository';

import { Container, Title, Form, Input, Submit, List } from './styles';

export default function Main() {
  const [input, setInput] = useState('');

  function handleAddRepository(text) {
    console.tron.log(input);
  }

  return (
    <Container>
      <Title>Repositories</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Browse repo..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="plus" size={22} color="#FFF" />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'My Repo',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolor quisquam natus delectus hic, ad recusandae eveniet praesentium. Voluptatem beatae odit necessitatibus cumque voluptate incidunt totam explicabo, consequuntur alias obcaecati?',
            stars: 3,
            forks: 13
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Repository data={item} />}
      />
    </Container>
  );
}
