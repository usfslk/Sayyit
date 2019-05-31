import React from 'react';
import { StyleSheet, WebView, View, StatusBar} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
        source={{uri: "https://staging.sayy.it"}}
        style={{marginTop: StatusBar.currentHeight}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});