import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello firstName= "boris" lastName= "Jonson" />, document.getElementById('root'));
registerServiceWorker();
