import React, { Component } from 'react'

import axios from 'axios'

import './dishes.css'

const jwt = localStorage.getItem('jwt');

export class dishes extends Component {
  constructor(props) {
    super(props)

    this.state = {
        posts: [],
        status: false,
        name: undefined,
        price: undefined,
        img_url: undefined,
        ingridients: undefined,     
    }
}

toggle = () => {
  this.setState({
      status: !this.state.status
  })
}

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = (e) => {
  e.preventDefault()
  console.log(this.state.name)
  console.log(this.state.price)
  console.log(this.state.img_url)
  console.log(this.state.ingridients)
  console.log('displayed data')
  axios({
    method: 'put',
    url:'https://protected-brook-06093.herokuapp.com/addDish',
    headers: {
        'Authorization': `Bearer ` + jwt,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    data: {
        'name': this.state.name,
        'price': this.state.price,
        'img_url': this.state.img_url,
        'ingridients': this.state.ingridients,
    }
  })
  .then(response => {
    console.log(response)
    console.log('issiusti duomenys')
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
    console.log('duomenys atnaujinti')
  })
  .catch(error => {
    console.log(error)
  })
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
      const {name, price, img_url, ingridients} = this.state
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
                    <img id="dishes_photo" alt="Displayed Dish" src={post.img_url}/>
                    <p id="dishes-name" key={post.id} >Name: {post.name}</p>
                    <p id="dishes-price" >Price: {post.price}€</p>
                  </div>) : 
                null
              }
              <img className="input-dishes-photo" src='https://freesvg.org/img/mono-tab-new.png' alt="Add Dishes" onClick={this.toggle}/>
              {this.state.status &&
                <div> 
                  <form id="new-dish-form" method='put' onSubmit={this.submitHandler}>
                    <ul>
                      <div className=".input-container"><input className="input-container" placeholder="Dish Name" name="name"  value={name} onChange={this.changeHandler}/><label>Full Name</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Price" name="price" value={price} onChange={this.changeHandler}/><label>Price</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Image Link" name="img_url" value={img_url} onChange={this.changeHandler}/><label>URL</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Ingridients" name="ingridients" value={ingridients} onChange={this.changeHandler}/><label>inggridients</label></div>
                    </ul>
                    <button class="btn">Submit</button>
                  </form>
                </div>}
            </div>
        </div>
        )
    }
}

export default dishes
