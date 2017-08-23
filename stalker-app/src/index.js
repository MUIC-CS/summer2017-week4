import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Versus from './Versus';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Versus />, document.getElementById('root'));
registerServiceWorker();
