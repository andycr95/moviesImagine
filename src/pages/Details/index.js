import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovie, getCredits} from '../../redux/movieDucks';
import {
  Wrapper,
  Title,
  Image4K,
  Description,
  CreditsR,
  Credits,
} from './styles';
import Poster from '../../components/Poster';
import ButtonW from '../../components/ButtonW';
import {View, StyleSheet, ScrollView} from 'react-native';
import moment from 'moment';
import {AirbnbRating} from 'react-native-ratings';
import ListActors from '../../components/ListActors';

export default function Details({route, navigation}) {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const credits = useSelector((state) => state.movies.credits);
  const genres = useSelector((state) => state.movies.genres);
  const companies = useSelector((state) => state.movies.companies);
  const popularity = movie.vote_average / 2;

  useEffect(() => {
    dispatch(getMovie(route.params.movieId));
    dispatch(getCredits(route.params.movieId));
  }, [dispatch, route.params.movieId]);

  return (
    <Wrapper>
      <Poster image={movie.backdrop_path} navigation={navigation} />
      <ScrollView style={{width: '100%'}}>
        <View style={styles.row}>
          <View>
            <Title numberOfLines={1}>{movie.title}</Title>
            <ButtonW />
          </View>
          <View style={styles.val}>
            <Image4K source={{uri: './4k-fullhd.png'}} />
            <AirbnbRating
              count={5}
              defaultRating={popularity}
              showRating={false}
              size={15}
            />
          </View>
        </View>
        <Description style={{lineHeight: 25}}>{movie.overview}</Description>
        <ListActors actors={credits.cast} />
        <View style={styles.rowC}>
          <View style={{flexDirection: 'column'}}>
            <Credits>Studio: </Credits>
            <Credits>Genre: </Credits>
            <Credits>Release: </Credits>
          </View>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <CreditsR numberOfLines={1}>
              {companies.map((c) => c.name).toString()}
            </CreditsR>
            <CreditsR numberOfLines={1}>
              {genres.map((g) => g.name).toString()}
            </CreditsR>
            <CreditsR>{moment(movie.release_date).format('YYYY')}</CreditsR>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    marginLeft: 30,
    paddingRight: 60,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
  },
  rowC: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 30,
    paddingRight: 60,
    marginBottom: 50,
  },
  val: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
