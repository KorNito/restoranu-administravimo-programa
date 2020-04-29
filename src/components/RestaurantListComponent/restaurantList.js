import React, { Component } from 'react'

import axios from 'axios';

const jwt = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydXRhQGV4YW1wbGUuZXhhbXBsZSIsImV4cCI6MTU4ODIyOTk5NiwiaWF0IjoxNTg4MTkzOTk2fQ.aQbqq6hqaeMhmYvkfv8PpnUMnfdR6ufnswLIhscpBZU";

export class restaurantList extends Component {
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
            <div className="restaurant-list">
            
            <input type="search" id="restaurant-search" name="restaurant_search" placeholder="Search"/>
          <ul>
          {
            posts.length ?
            posts.map(post => <li key={post.id}>{post.address}</li>) :
            null
          }
          </ul>
        
        
            </div>
        )
    }
}

export default restaurantList
