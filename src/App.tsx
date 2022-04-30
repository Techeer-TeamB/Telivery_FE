import React from 'react';
import Telivery from './Teliverylogo.png';
import Vector1 from './Vector1.png';
import Address from './Address.png';
import search from './search.png';

import store from '@store/store';
import { getAllJSDocTagsOfKind } from 'typescript';

function App() {
  return (
    <div>
      <div className="flex flex-row justify-items-start h-he items-center bg-green-500">
        <div>
          <img
            className="bg-yellow-500 ml-hml w-tew h-teh"
            src={Telivery}
            alt="Logo"
          />
        </div>
        <div>
          <img
            className="bg-yellow-500 ml-hml2 w-wv h-hv"
            src={Vector1}
            alt="Vector1"
          />
        </div>
        <div className="ml-hml3 w-wlo h-hlo text-10">LOGIN</div>
      </div>

      <div className="h-had bg-blue-500 flex items-start grid justify-items-center">
        <img
          className="bg-yellow-500 w-wad h-had"
          src={Address}
          alt="Address"
        />
      </div>
      <div className="h-hd2 bg-yellow-500 flex items-start grid justify-items-center">
        <div className="text-5xl leading-10 mt-4">Welcome!</div>
        <div className="text-slate-400">
          search for menu or restaurant you want!
        </div>
      </div>
      <div className="flex items-center flex justify-center h-he3 bg-blue-300 align-">
        <div>
          <input
            className="w-96 h-full rounded-full"
            type="text"
            id="lname"
            name="lname"
          ></input>
        </div>
        <div
          className="absolute ml-80
         bg-yellow-500 float-right"
        >
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="h-he4 bg-green-300  flex flex-col  ">
        <div className="flex flex-row bg-yellow-200 flex justify-center ">
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
        </div>
        <div className="flex flex-row bg-yellow-200 flex justify-center mt-2">
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-2"></div>
          <div className="h-24 w-24 bg-blue-200 mr-28"></div>
        </div>

        <div></div>
      </div>
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
