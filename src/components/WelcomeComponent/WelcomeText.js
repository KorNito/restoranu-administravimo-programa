import React, { Component } from 'react';

import './WelcomeText.css';

class Welcome extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
          posts: [] 
      }
  }
 
    render() {
      return (
        <div className="WelcomeText">
          <h2 className="MainWelcome">Hi, Welcome Back!</h2>
          <h2 className="AdminPanel">Your restaurant admin panel</h2>
        </div>
      )
    }
  }
  
  export default Welcome;
  