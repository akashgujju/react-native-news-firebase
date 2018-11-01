/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainApp from './Sources/MainApp.js';
import Login from './Sources/Login.js';
import Tab5 from'./Sources/Tab5';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body,View } from 'native-base';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <SimpleApp />
      </View>
    );
  }
}
const SimpleApp = createStackNavigator({
  Login: { screen: Login },
  MainApp: { screen: MainApp },
}
);