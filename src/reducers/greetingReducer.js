const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_GREETING_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
