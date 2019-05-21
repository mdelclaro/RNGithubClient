import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Repository from '~/components/Repository';
import api from '~/services/api';
import getRealm from '~/services/realm';

import { Container, Title, Form, Input, Submit, List } from './styles';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Title>Repositories</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          error={error}
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
