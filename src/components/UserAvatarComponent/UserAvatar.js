import React, { Component } from 'react'

import './UserAvatar.css';

export default class UserAvatar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            name: 'Test Username',
            status: false,     
        }
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
        return (
            <div>  
                <img id="user-image" data-testid="user-avatar-image" src="https://image.flaticon.com/icons/svg/72/72905.svg" alt="Avatar logo" onClick={this.toggle}/>
                <h2 id="username" data-testid="user-avatar-username">{this.state.name}</h2>
                
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
