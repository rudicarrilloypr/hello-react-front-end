import axiosInstance from '../api/axiosConfig';

const fetchGreeting = () => (dispatch) => {
  axiosInstance.get('/messages/random_greeting')
    .then((response) => {
      dispatch({ type: 'FETCH_GREETING_SUCCESS', payload: response.data.greeting });
    });
};

export default fetchGreeting;
