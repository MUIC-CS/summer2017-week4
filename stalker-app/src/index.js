import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stalker from './Stalker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Stalker />, document.getElementById('root'));
registerServiceWorker();
