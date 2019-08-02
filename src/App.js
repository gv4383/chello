import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './redux/store';
// import logo from './logo.svg';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
