import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularMovies, getTopRateMovies} from '../../redux/movieDucks';
import {Wrapper, Backgrond} from './styles';
import ListCards from '../../components/ListCard';
import Header from '../../components/Header';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const moviesP = useSelector((state) => state.movies.popularMovies);
  const moviesTR = useSelector((state) => state.movies.topRateMovies);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getTopRateMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <Backgrond>
        <ListCards
          data={moviesP}
          navigation={navigation}
          title={'RECOMMENDED FOR YOU'}
        />
        <ListCards data={moviesTR} navigation={navigation} title={'TOP RATE'} />
      </Backgrond>
    </Wrapper>
  );
}
