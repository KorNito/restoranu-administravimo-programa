import React, { Component } from 'react'

import LoginPage from '../../pages/LoginPage/LoginPage'
import App from '../../App'

import axios from 'axios'

import './UserAvatar.css';
import '../../App.css';

import { BrowserRouter, Switch, Route, Router} from 'react-router-dom';

const jwt = localStorage.getItem('jwt');

export class UserAvatar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            status: false     
        }
    }
    // myFunction()
    // {
    //     document.getElementsByClassName("App").style.color= "red";
    // }

    componentDidMount(){
        axios({
          url: 'https://protected-brook-06093.herokuapp.com/getUserData',
          method: 'get',
          headers: {
            'Authorization': `Bearer ` + jwt,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }  
        })
          .then(response => {
            console.log(response)
            this.setState({posts: response.data})
          }) 
          .catch(error => {
            console.log(error);
          });
    }

    toggle = () => {
        this.setState({
            status: !this.state.status
        })
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "http://localhost:3000/";
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <img id="user-image" data-testid="user-avatar-image" src="https://image.flaticon.com/icons/svg/72/72905.svg" alt="Avatar logo" onClick={this.toggle}/>
                {
                    posts.length ?
                    posts.map(post => <h2 id="username" data-testid="user-avatar-username">Welcome, {post.name}</h2>) :
                    null
                }
                
                {this.state.status &&
                <div id="settings-menu">
                    <ul>
                        <a><li id='menu-settings'><span>⚙️</span> Change password</li></a>
                        <a><li id='dark-mode' onClick={this.logout}> <span>🌛</span> Dark Mode</li></a>
                        <a><li id='menu-logout' onClick={this.logout}> <span>🗝️</span> Log out</li></a>
                    </ul>
                </div>}
            </div>
        )
    }
}

export default UserAvatar
