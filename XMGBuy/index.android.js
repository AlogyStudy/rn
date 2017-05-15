/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App';
// import Launch from './src/Component/common/XMGLaunchImage';

export default class XMGBuy extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
