import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice'

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting())
  }, [dispatch]);
  return (
    <h1>{greeting}</h1>
  )
}

export default Greeting;