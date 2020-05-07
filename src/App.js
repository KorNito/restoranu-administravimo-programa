import React, { Component } from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard'

import './App.css';

class App extends Component {

  render() {
    return(
      <div className="App" >
        <BrowserRouter>
          <Switch>
            <Route path='/Restoranu-administravimo-programa' exact component={LoginPage}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
