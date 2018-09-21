/**
 * Sample React Native App
 * https://github.com/HiraSysCom/tdlreactredux
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from 'src/pages/Application';
import store from './hrtodolist';

export default class hrtodolist extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('hrtodolist', () => hrtodolist);
