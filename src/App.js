import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
