import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchGreeting from '../actions/greetingActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greeting;
