import React, { Component } from 'react';

import axios from 'axios';

import './RestaurantLogo.css';

const jwt = localStorage.getItem('jwt');

export class RestaurantLogo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios({
          url: 'https://protected-brook-06093.herokuapp.com/getHeaderData',
          method: 'get',
          headers: {
            'Authorization': `Bearer ` + jwt,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }  
        })
          .then(response => {
            this.setState({posts: response.data})
          }) 
          .catch(error => {
            console.log(error);
          });
      }

    render() {
        const {posts} = this.state
        return (
          <div >
          {
            posts.length ?
            posts.map(post => 
              <div className="restaurant-logo-component">
                <img id="restaurant-logo" alt="Restaurant logo" src={post.logo_url}/>
                <p id="restaurant-name" key={post.id}>{post.addressOrChain}</p>
              </div>) : 
            null
          }      
          </div>
        )
    }
}

export default RestaurantLogo;
