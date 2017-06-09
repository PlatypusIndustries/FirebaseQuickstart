'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebaseApp from './firebaseConfig.js';

export default class ReactNativeFirebase extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Firebase Quickstart!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit ./firebaseConfig.js
          by adding in your firebase app credentials from
          console.firebase.google.com > Your App > Add Firebase to your web app
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginRight: 10,
    marginLeft: 10
  },
});

AppRegistry.registerComponent('ReactNativeFirebase', () => ReactNativeFirebase);
