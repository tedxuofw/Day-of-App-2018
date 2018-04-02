import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Speakers from './pages/speakers';
import Home from './pages/main.js';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch> 
					<Route exact path='/' component={Home}/>
                    <Route path='/speakers' component={Speakers}/>
                </Switch>
			</BrowserRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot-loading
registerServiceWorker();