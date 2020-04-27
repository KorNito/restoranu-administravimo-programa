import React, { Component } from 'react';

import UserAvatar from '../UserAvatarComponent/UserAvatar';
import RestaurantLogo from '../RestaurantLogoComponent/RestaurantLogo';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header data-testid="header">
        <RestaurantLogo id="restaurant-logo"/>
        <UserAvatar id="user-avatar"/>
      </header>
    )
  }
}

export default Header;