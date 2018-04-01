import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Speakers from './pages/speakers';


// Initialize app
ReactDOM.render(<Speakers/>, document.getElementById('app'));

// Hot-loading
registerServiceWorker();