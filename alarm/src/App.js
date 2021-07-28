import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import Adding from './pages/Add';
import Waiting from './pages/Waiting';
import Alarm from './pages/alarm';
import Training from './pages/training';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/add' component={Adding}/>
        <Route path='/wait' component={Waiting}/>
        <Route path='/alarm' component={Alarm}/>
        <Route path='/training' component={Training}/>
      </Switch>
    </Router>
  );
}

export default App;
