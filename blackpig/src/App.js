import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Alarm from './pages/alarm';
import Training from './pages/training';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path='/alarm' component={Alarm}/>
        <Route path='/training' component={Training}/>
      </Switch>
    </Router>
  );
}

export default App;
