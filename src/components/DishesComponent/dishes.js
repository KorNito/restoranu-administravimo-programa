import React, { Component } from 'react'

import axios from 'axios'

import './dishes.css'

const jwt = localStorage.getItem('jwt');

export class dishes extends Component {
  constructor(props) {
    super(props)

    this.state = {
        posts: []     
    }
}

componentDidMount(){
  axios({
    url: 'https://protected-brook-06093.herokuapp.com/getChainDishes',
    method: 'get',
    headers: {
      'Authorization': `Bearer ` + jwt,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'RestaurantAddress': 'Kalvariju g. 55'
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
          <div className="dishes-component">
                <div className="Dishes">
    {/* <input id="dishes-input" type="text" placeholder="Dishes"/>
    <div className="dropdown">
      <input id="dishes-input2" type="text" placeholder="Ingridients"/>
      <div id="myDropdown" className="dropdown-content">
       <a href="#Chicken">Chicken</a>
       <a href="#Beef">Beef</a>
       <a href="#Pork">Pork</a>
     </div>
    </div> */}
    {
      posts.length ?
      posts.map(post => 
        <div className="restaurant-dishes">
          <img id="dishes_photo"  src={post.img_url}/>
          <p id="dishes-name" key={post.id} >Name: {post.name}</p>
          <p id="dishes-price" >Price: {post.price}€</p>
        </div>) : 
      null
    }
      </div>
        </div>
        )
    }
}

export default dishes
