import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { WebView } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import * as firebase from 'firebase';

export default class Article extends React.Component {
writeUserData(title,description,publishedAt,source,urlToImage,url){
    var d=new Date();
    alert('Saved To Favourites');
    var user = firebase.auth().currentUser;
    var u= user.uid;
    firebase.database().ref('UsersList/'+u).push({
        title,
        description,
        publishedAt,
        source,
        urlToImage,
        url
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      
      <TouchableNativeFeedback
        onPress={() => Linking.openURL(url)}
        onLongPress={this.writeUserData.bind(this,title,description,publishedAt,source,urlToImage,url)}
        delayLongPress={500}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#CCD1D1' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>

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