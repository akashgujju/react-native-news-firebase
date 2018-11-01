import React, { Component } from 'react';
import {ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body,Left,TextInput,TouchableOpacity  } from 'native-base';
import MainApp from './MainApp.js';
import * as firebase from 'firebase';
import bgImage from './pic.jpg';
//import Tab5 from './Tab5.js';

firebase.initializeApp(
  {
    apiKey: "AIzaSyCAVwVeOZ9B0x99eiq0p-uz9hZM67qSL44",
    authDomain: "news-c62f1.firebaseapp.com",
    databaseURL: "https://news-c62f1.firebaseio.com",
    projectId: "news-c62f1",
    storageBucket: "news-c62f1.appspot.com",
    messagingSenderId: "714662069105"
  });
export default class Login extends Component {

constructor(props) {
    super(props);
    this.state={ login: '',password: ''};
  }


  static navigationOptions={
    header: null,
  };


onSubmitButton()
{
 
    const{login,password} = this.state;
    firebase.auth().signInWithEmailAndPassword(login,password)
    .then(() =>
    {
      this.props.navigation.navigate('MainApp');
    })
    .catch(()=>{
      alert('Error In Login Try Again');
    });
}
onSignupButton()
{
    const{login,password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(login,password)
    .then(() =>
    {
      this.props.navigation.navigate('MainApp');
    })
    .catch(()=>{
      alert('Error In SignUp Try Again');
    });
}
  render(){
    return (
      <Container>
      <Header>
      <Text style={{marginTop:20,marginLeft:10,color:'orange',fontSize:20,fontWeight:'800'}}>NEWS APP</Text>
      </Header>
        <Content contentContainerStyle={{flex: 1,alignItems: 'center'}}>
        <Text style={{fontSize:30,fontStyle:'italic',color:'#2874A6'}}>Please Enter Login Details</Text>
          <Form>
          <Body style={{alignItems: 'center'}}>
          <Body>
            <Item fixedLabel>
              <Label>Email-id:</Label>
              <Input onChangeText={(login) => this.setState({login})}
                      value={this.state.login} />
            </Item>
            <Item fixedLabel>
              <Label>Password:</Label>
              <Input onChangeText={(password) => this.setState({password})}
                      value={this.state.password} secureTextEntry={true}/>
            </Item>
            </Body>
            <Body>
            <Button onPress={this.onSubmitButton.bind(this)} full rounded success><Text>Login</Text></Button>
            </Body>
            <Body>
              <Button onPress={this.onSignupButton.bind(this)} full rounded primary><Text>SignUp</Text></Button>
            </Body>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}