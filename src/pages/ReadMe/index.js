import React from 'react';
import { StatusBar, ActivityIndicator, Text } from 'react-native';
import { Buffer } from 'buffer';
import Markdown from 'react-native-markdown-renderer';

import api from '~/services/api';

import { Container } from './styles';

export default class ReadMe extends React.Component {
  static navigationOptions = {
    title: 'README.md',
    headerTintColor: '#333'
  };

  state = {
    readMe: null,
    loading: true
  };

  componentDidMount() {
    this.getReadMe();
  }

  getReadMe = async () => {
    try {
      const response = await api.get(
        `/repos/${this.props.navigation.state.params.fullName}/readme`
      );

      const readMe = Buffer.from(response.data.content, 'base64').toString();

      this.setState({
        readMe,
        loading: false
      });
    } catch (err) {
      alert(err.message);
      console.tron.log(err);
    }
  };

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="#7159c1"
          translucent={false}
          barStyle="light-content"
        />
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#7159c1" />
        ) : (
          <Markdown>{this.state.readMe}</Markdown>
        )}
      </Container>
    );
  }
}
