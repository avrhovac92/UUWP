import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App property={"value"} list={['aco', 'ogi', 'milica']} />,
  document.getElementById('root')
);
registerServiceWorker();
