import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import Reviews from './pages/reviews/reviews';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/review-app' component={Home} />
        <Route exact path='/reviews' component={Reviews} />
      </Switch>
    </div>
  );
}

export default App;
