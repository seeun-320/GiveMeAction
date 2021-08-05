import React from 'react';
import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {render} from 'react-dom';

import Main from '../views/Main';
import Adding from '../views/Add';
import Waiting from '../views/Waiting';
import Alarm from '../views/alarm';
import Training from '../views/training';

import './attachErrorHandler';

import css from './App.module.less';

export const routes = [
	{path:'/', exact:true, component:Main},
	{path:'/add', component:Adding},
	{path:'/wait', component:Waiting},
	{path:'/alarm', component:Alarm},
	{path:'/training', component:Training},
]

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		// <Main/>
	// 	<Router>
    //   <Switch>
    //     <Route path='/' component={Main} exact/>
    //     <Route path='/add' component={Adding}/>
    //     <Route path='/wait' component={Waiting}/>
    //     <Route path='/alarm' component={Alarm}/>
    //     {/* <Route path='/training' component={Training}/> */}
    //   </Switch>
    // </Router>
	<Router>
		<div>
			{/* <ButtonToSamples /> */}
			{routes.map((route, index) => <Route {...route} />)}
		</div>
	</Router>
	)
});

export default ThemeDecorator(App);
