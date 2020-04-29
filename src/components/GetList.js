import React, { Component } from 'react'

import axios from 'axios'

const jwt = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydXRhQGV4YW1wbGUuZXhhbXBsZSIsImV4cCI6MTU4NzUyODA1OCwiaWF0IjoxNTg3NDkyMDU4fQ.pfv_WJOe2hRfgQjecV4ZKTR5tk-l-3vqggNZSpy4NDE";

class GetList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios({
      url: 'https://protected-brook-06093.herokuapp.com/menu',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + jwt,
        'Content-Type': 'application/json',
        'RestaurantAddress': 'Kalvariju g. 55'
      }
    })
        .then(response => {
          console.log(response)
          this.setState({posts: response.data})
        })
        .catch(error => {
          console.log(error);
          console.log('asd');
        });
  }

  render() {
    const {posts} = this.state
    return (
        <div>
          List of posts
          {
            posts.length ?
          posts.map(post => <div key={post.id}>{post.name}
          <img id="dish-id" src={post.img_url}/></div>) :
                null
          }
        </div>
    )
  }
}

export default GetList