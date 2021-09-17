import { Home } from './components/Home';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const state = useSelector((state) => state.todos);
  console.log(state);
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
