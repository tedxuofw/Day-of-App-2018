import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Speakers from './pages/speakers';
import Home from './pages/main.js';
import About from './pages/about.js';
import Landing from './pages/landing.js';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch> 
                    <Route exact path='/' component={Landing}/>
					<Route path='/home' component={Home}/>
                    <Route path='/speakers' component={Speakers}/>
					<Route path='/about' component={About}/>
                </Switch>
			</HashRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot-loading
registerServiceWorker();