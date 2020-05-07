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
    axios({
      url: 'https://protected-brook-06093.herokuapp.com/menu',
      method: 'get',
      headers: {
        'Authorization': `Bearer ` + jwt,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }  
    })
      .then(response => {
        this.setState({posts: response.data})
      }) 
      .catch(error => {
        console.log(error);
      });
  })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount(){
    axios({
      url: 'https://protected-brook-06093.herokuapp.com/menu',
      method: 'get',
      headers: {
        'Authorization': `Bearer ` + jwt,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
      const {name, price, img_url, ingridients} = this.state
        return (
          <div className="dishes-component">
            <div className="Dishes">
              <img className="input-dishes-photo" src='https://freesvg.org/img/mono-tab-new.png' alt="Add Dishes" onClick={this.toggle}/>
              {this.state.status &&
                <div> 
                  <form id="new-dish-form" method='put' onSubmit={this.submitHandler}>
                    <button class="Exit-btn" onClick={this.toggle}>X</button>
                    <ul>
                      <div className=".input-container"><input className="input-container" placeholder="Dish Name" name="name"  value={name} onChange={this.changeHandler}/><label id="label">*</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Price" name="price" value={price} onChange={this.changeHandler}/><label id="label">*</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Image Link" name="img_url" value={img_url} onChange={this.changeHandler}/><label id="label">*</label></div>
                      <div className=".input-container"><input className="input-container" placeholder="Ingridients" name="ingridients" value={ingridients} onChange={this.changeHandler}/><label id="label">*</label></div>
                    </ul>
                    <button class="btn">Submit</button>
                  </form>
                </div>}
              {
                posts.length ?
                posts.map(post => 
                  <div className="restaurant-dishes">
                    <img id="dishes_photo" alt="Displayed Dish" src={post.img_url}/>
                    <p id="dishes-name" key={post.id} >{post.name}</p>
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
