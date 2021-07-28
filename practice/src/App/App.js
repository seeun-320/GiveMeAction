import React from 'react';
import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from 'react-router-dom';

import Main from '../views/Main';
import Adding from '../views/Add';
import Waiting from '../views/Waiting';
import Alarm from '../views/alarm';
// import Training from '../views/training';

import './attachErrorHandler';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Router>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/add' component={Adding}/>
        <Route path='/wait' component={Waiting}/>
        <Route path='/alarm' component={Alarm}/>
        {/* <Route path='/training' component={Training}/> */}
      </Switch>
    </Router>
	)
});

export default ThemeDecorator(App);
