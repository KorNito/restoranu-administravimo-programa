import React, { Component } from 'react'

import axios from 'axios'

import './UserAvatar.css';

const jwt = localStorage.getItem('jwt');

export class UserAvatar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            status: false     
        }
    }

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
        window.open('./src/pages/LoginPage.js');
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
                        <a><li id='menu-settings'><span>⚙️</span> Settings</li></a>
                        <a><li id='menu-logout' onClick={this.logout}> <span>🗝️</span> Log out</li></a>
                    </ul>
                </div>}
            </div>
        )
    }
}

export default UserAvatar
