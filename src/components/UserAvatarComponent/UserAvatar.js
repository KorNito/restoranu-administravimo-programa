import React, { Component } from 'react'

import LoginPage from '../../pages/LoginPage/LoginPage'
import App from '../../App'

import axios from 'axios'

import './UserAvatar.css';
import '../../App.css';

import { BrowserRouter, Switch, Route, Router} from 'react-router-dom';

export class UserAvatar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            status: false,
            passwordFormStatus: false,
            oldPassword: undefined,
            newPassword: undefined
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount(){
        const jwt = localStorage.getItem('jwt');

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
            console.log('duomenys issiusti')
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

    togglePasswordForm = () =>{
        this.setState({
            passwordFormStatus: !this.state.passwordFormStatus
        })
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "http://localhost:3000/";
    }

    submitPasswordChange = (e) => {
        e.preventDefault()
        const jwt = localStorage.getItem('jwt');
        console.log(this.state.oldPassword);
        console.log(this.state.newPassword);
        console.log('duomenys gauti');
        axios({
            url: '',
            method: 'patch',
            headers: {
                'Authorization': `Bearer ` + jwt,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                'oldPassword': this.state.oldPassword,
                'newPassword': this.state.newPassword,
            }  
          })
            .then(response => {
              console.log(response)
              this.setState({posts: response.data})
              console.log('duomenys issiusti')
            }) 
            .catch(error => {
              console.log(error);
            });
    }

    render() {
        const {posts} = this.state
        const {oldPassword, newPassword} = this.state
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
                        <a><li id='menu-settings' onClick={this.togglePasswordForm}><span>⚙️</span> Change password</li></a>
                        <a><li id='dark-mode' onClick={this.logout}> <span>🌛</span> Dark Mode</li></a>
                        <a><li id='menu-logout' onClick={this.logout}> <span>🗝️</span> Log out</li></a>
                    </ul>
                </div>}

                {this.state.passwordFormStatus &&
                <div> 
                  <form id="change-password-form" method='patch' onSubmit={this.submitPasswordChange}>
                    <button class="Exit-btn" onClick={this.togglePasswordForm}>X</button>
                    <ul>
                      <div className=".input-container"><input className="input-container" placeholder="Old Password" name="oldPassword" value={oldPassword} onChange={this.changeHandler}/><label id="label">OLD</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="New Password" name="newPassword" value={newPassword} onChange={this.changeHandler} /><label id="label">NEW</label></div>
                    </ul>
                    <button class="btn">Submit</button>
                  </form>
                </div>}
            </div>
        )
    }
}

export default UserAvatar
