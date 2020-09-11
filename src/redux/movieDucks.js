import axios from 'axios';
import {API_ENDPOINT, API_MOVIE_KEY} from '@env';

const initialData = {
  popularMovies: [],
  topRateMovies: [],
  movie: {},
  genres: [],
  companies: [],
  credits: {},
};

const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
const GET_TOP_RATE_MOVIES = 'GET_TOP_RATE_MOVIES';
const GET_MOVIE = 'GET_MOVIE';
const GET_CREDIT = 'GET_CREDIT';

export default function movieReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {...state, popularMovies: action.payload};
    case GET_TOP_RATE_MOVIES:
      return {...state, topRateMovies: action.payload};
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        companies: action.payload.production_companies,
        genres: action.payload.genres,
      };
    case GET_CREDIT:
      return {...state, credits: action.payload};
    default:
      return state;
  }
}

export const getPopularMovies = () => async (dispatch, getReducer) => {
  try {
    const res = await axios.get(
      `${API_ENDPOINT}/movie/popular?api_key=${API_MOVIE_KEY}&language=en-US&page=1`,
    );
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopRateMovies = () => async (dispatch, getReducer) => {
  try {
    const res = await axios.get(
      `${API_ENDPOINT}/movie/top_rated?api_key=${API_MOVIE_KEY}&language=en-US&page=1`,
    );
    dispatch({
      type: GET_TOP_RATE_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = (id) => async (dispatch, getReducer) => {
  try {
    const res = await axios.get(
      `${API_ENDPOINT}/movie/${id}?api_key=${API_MOVIE_KEY}&language=en-US`,
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCredits = (id) => async (dispatch, getReducer) => {
  try {
    const res = await axios.get(
      `${API_ENDPOINT}/movie/${id}/credits?api_key=${API_MOVIE_KEY}`,
    );
    dispatch({
      type: GET_CREDIT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
