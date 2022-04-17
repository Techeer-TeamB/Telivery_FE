import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from '@store/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Hello, Tailwind CSS!
      </button>
    </div>
  );
}

export default App;

/*

import React from 'react';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

*/
/*
import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
*/
