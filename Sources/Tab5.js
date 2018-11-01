import React from 'react';
import { View, Linking, TouchableNativeFeedback,ScrollView,RefreshControl } from 'react-native';
import { WebView } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import {Button} from 'native-base';
import moment from 'moment';
import * as firebase from 'firebase';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={listingData: [], refreshing: false};
  }
  componentWillMount()
  {
    var that = this;
    var user = firebase.auth().currentUser;
    var u= user.uid;
    var ref=firebase.database().ref('UsersList/'+u);
    var finished = [];
    ref.once('value', snapshot => {
      snapshot.forEach(function(data) {
        let result = data.val();
        result["key"]  = data.key;
        finished.push(result);
      })
    }).then(function(){
      that.setState({
        listingData:  finished
      }) 
    })
  }



  fetchData(){
    var that = this;
    var user = firebase.auth().currentUser;
    var u= user.uid;
    var ref=firebase.database().ref('UsersList/'+u);
    var finished = [];
    ref.once('value', snapshot => {
      snapshot.forEach(function(data) {
        let result = data.val();
        result["key"]  = data.key;
        finished.push(result);
      })
    }).then(function(){
      that.setState({
        listingData:  finished
      }) 
    })
  }


   _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }



  render() {
    const { noteStyle, featuredTitleStyle } = styles;
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';




    return (
      <View>
      < ScrollView
      refreshControl={
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
      />
    }>
      { this.state.listingData.map (function(x){
                return(
                  <TouchableNativeFeedback
        onPress={() => Linking.openURL(x.url)}>
        <Card
          featuredTitle={x.title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: x.urlToImage || defaultImg
          }}
        >
          <Text>
            {x.description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#CCD1D1' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{x.source.name.toUpperCase()}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
                   )
              })
            }

      </ScrollView>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      </View>
      );
    }
  }





const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#CCD1D1',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};