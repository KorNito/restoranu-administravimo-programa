import React, { Component } from 'react'

import axios from 'axios';

import './restaurantList.css'

const jwt = localStorage.getItem('jwt');

export class restaurantList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            status: false,
            restaurantAddress: undefined,     
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
      url:'https://protected-brook-06093.herokuapp.com/addRestaurant',
      headers: {
          'Authorization': `Bearer ` + jwt,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      data: {
          'restaurantAddress': this.state.restaurantAddress,
      }
    })
    .then(response => {
      alert(JSON.stringify(response.data))
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
        url: 'https://protected-brook-06093.herokuapp.com/addresses',
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
        const {restaurantAddress} = this.state
        return (
            <div className="restaurant-list">
            {/* <input type="search" id="restaurant-search" name="restaurant_search" placeholder="Search"/> */}
            <img className="input-restaurant-photo" src='https://freesvg.org/img/mono-tab-new.png' alt="Add Restaurant" onClick={this.toggle}/> 
            {this.state.status &&
                <div>
                  <form id="new-restaurant-form" method='put' onSubmit={this.submitHandler}>
                    <button class="Exit-btn" onClick={this.toggle}>X</button>
                    <ul>
                      <div className=".input-container"><input className="input-container" placeholder="Restaurant Address" name="restaurantAddress"  value={restaurantAddress} onChange={this.changeHandler}/><label id="label">*</label></div>
                    </ul>
                    <button class="btn">Submit</button>
                  </form>
                </div>}

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
