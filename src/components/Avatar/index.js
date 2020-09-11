import React from 'react';
import {View} from 'react-native';
import {ImageAv, NameText} from './styles';

export default function Avatar(props) {
  var imgUri = `https://image.tmdb.org/t/p/original/${props.item.profile_path}`;
  return (
    <View style={{width: 60, marginRight: 40, alignItems: 'center'}}>
      <ImageAv source={{uri: imgUri}} />
      <NameText>{props.item.name}</NameText>
    </View>
  );
}
