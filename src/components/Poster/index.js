import React from 'react';
import {Header, ImagePoster, Icons} from './styles';
import {Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Poster(props) {
  var imgUri = `https://image.tmdb.org/t/p/original/${props.image}`;
  return (
    <Header>
      <ImagePoster source={{uri: imgUri}}>
        <Icons>
          <Icon.Button
            name="arrow-back-outline"
            color="white"
            onPress={() => props.navigation.goBack()}
            backgroundColor="transparent"
            style={{marginTop: 20}}
            size={30}
          />
          <Icon
            name="ios-heart-outline"
            color="white"
            style={{marginTop: 20}}
            size={30}
          />
        </Icons>
      </ImagePoster>
    </Header>
  );
}
