import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

export default class ReadMe extends React.Component {
  static navigationOptions = {
    title: 'README.md',
    headerTintColor: '#333'
  };

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#7159c1"
          translucent={false}
          barStyle="light-content"
        />
      </View>
    );
  }
}
