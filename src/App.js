import { Provider } from 'react-redux';
import './App.css';
import Greeting from './components/Greeting';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
}

export default App;
