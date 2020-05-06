import React, { Component } from 'react';

import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard'

import { BrowserRouter, Switch, Route} from 'react-router-dom';

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

