import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('héllô madafakas!');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello Fakin World!!</Text>
    </View>
  );
}
