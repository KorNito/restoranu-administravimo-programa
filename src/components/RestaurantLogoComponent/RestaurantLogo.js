import React, { Component } from 'react';

import axios from 'axios';

import './RestaurantLogo.css';

const jwt = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydXRhQGV4YW1wbGUuZXhhbXBsZSIsImV4cCI6MTU4ODIzMjA3OCwiaWF0IjoxNTg4MTk2MDc4fQ.2-SQUiDTYo1It-dEPb9ha91LigOrbYN44ROsBfbiBvk";

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
            console.log(response)
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
                <img id="restaurant-logo" src={post.logo_url}/>
                <p id="restaurant-name" key={post.id}>{post.addressOrChain}</p>
              </div>) : 
            null
          }      
          </div>
        )
    }
}

export default RestaurantLogo;
