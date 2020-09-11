import React from 'react';
import {Title, ImageMovie} from './styles';
import {AirbnbRating} from 'react-native-ratings';
import {StyleSheet, View} from 'react-native';

export default function CardMovie(props) {
  var imgUri = `https://image.tmdb.org/t/p/original/${props.item.poster_path}`;
  const popularity = props.item.vote_average / 2;
  return (
    <View style={styles.movie}>
      <ImageMovie source={{uri: imgUri}} />
      <Title numberOfLines={1}>{props.item.title}</Title>
      <AirbnbRating
        count={5}
        defaultRating={popularity}
        showRating={false}
        size={15}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movie: {
    width: 130,
    height: 220,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: 20,
  },
});
