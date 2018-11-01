import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createMaterialTopTabNavigator } from'react-navigation';
import Tab1 from'./Tab1';
import Tab2 from'./Tab2';
import Tab3 from'./Tab3';
import Tab4 from'./Tab4';
import Tab5 from'./Tab5';
const instructions = Platform.select({
  ios: '',
  android: '',
});

type Props = {};
export default class App extends Component<Props> {

  static navigationOptions={
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor: '#34495E',height:40}}>
      	<Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',color:'#E74C3C',textAlignVertical:'auto',paddingTop:6,fontStyle:'italic'}}>...... * News * ......</Text>
      </View>
      <TabbbedLook />
      </View>
    );
  }
}
const TabbbedLook = createMaterialTopTabNavigator(
{
  Headlines:
  {
    screen: Tab1,
  },
  Indian:
  {
    screen: Tab2,
  },
  Sports:
  {
    screen: Tab3,
  },
  TechNews:
  {
    screen: Tab4,
  },
  Favourites:
  {
    screen:Tab5,
  }
},
{
    initialRouteName: 'Headlines',
    lazy:true,
    tabBarOptions: {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: '#16A085',
  },
}
},
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});