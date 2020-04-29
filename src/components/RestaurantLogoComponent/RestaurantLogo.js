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
          url: 'https://protected-brook-06093.herokuapp.com/addresses',
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
            <div id="restaurant-logo-component">
                {
                    posts.length ?
                    posts.map(post => <li key={post.id}>{post.address}</li>) :
                    null
                }
                <hi>test</hi>    
            </div>
        )
    }
}

export default RestaurantLogo;