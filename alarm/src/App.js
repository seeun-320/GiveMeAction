import React from 'react';
// import { firestore } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import Adding from './pages/Add';
import Waiting from './pages/Waiting';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/add' component={Adding}/>
        <Route path='/wait' component={Waiting}/>
      </Switch>
    </Router>
  );
}

export default App;
