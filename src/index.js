// import the necessities
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';

// Render into root DOM node
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
