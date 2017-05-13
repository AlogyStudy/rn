/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

// 引入入口文件
let Mian = require('./src/XMGMain');

class News extends Component {
  render() {
    return (
    	<Mian />
    );
  }
}

AppRegistry.registerComponent('News', () => News);
