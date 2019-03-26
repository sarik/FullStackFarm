import axios from 'axios';
import rr , {FETCH_USER , FETCH_SURVEYS} from './types'

//import * as types from './types';
console.log(rr);
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  // dispatch({ type: types.FETCH_USER, payload: res.data });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
