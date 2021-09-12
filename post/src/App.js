import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Redux Learn</p>
        </header>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
