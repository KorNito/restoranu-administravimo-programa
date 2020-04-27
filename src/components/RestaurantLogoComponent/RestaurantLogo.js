import React, { Component } from 'react'

import './RestaurantLogo.css';

export default class RestaurantLogo extends Component {
    state = {
        name: 'Test Restaurant Name',
        logo: 'https://i.ibb.co/RBgLX8g/Restorant-Logo.png',
    }

    render() {
        return (
            <div id="restaurant-logo-component">
                <a href="http://localhost:3000/">
                <img id="restaurant-logo" src={this.state.logo} alt='Restaurant logo'/>
                </a>
                <h1 id="restaurant-name" data-testid="restaurant-name">{this.state.name}</h1>    
            </div>
        )
    }
}
