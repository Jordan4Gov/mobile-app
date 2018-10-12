import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView style={styles.websiteWebView}
          source={{uri: 'https://www.jordanforgovernor.com/'}}
          startInLoadingState={true}
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
  websiteWebView: {
    flex: 1,
  },
  websiteText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  navigationFilename: {
    marginTop: 5,
  },
});
