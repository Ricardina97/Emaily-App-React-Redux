import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// In this case we only need the data (auth) to make sure the user is logged in or not, we just
// need to use the res.data
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

// Send credit tokens to know how much credit does the user have
export const handleToken = token => async dispatch => {
    // dispatch an action to the backend in the url for stripe
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
