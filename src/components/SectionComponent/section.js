import React, { Component } from 'react'
import axios from 'axios'

import './section.css';

const jwt = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydXRhQGV4YW1wbGUuZXhhbXBsZSIsImV4cCI6MTU4NzY4MjM2NCwiaWF0IjoxNTg3NjQ2MzY0fQ.tGaphoywrvnnfYgJn5amjWVhmA_Wfy2Zq_3XZMlVtak";

  class Section extends Component {
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

  /*
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
  } */

  render() {
      const {posts} = this.state
      return (
        <section data-testid="section" className="grid-container">

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
        <div className="sales-graph">
          <img src="https://cdn.discordapp.com/attachments/688730744641552384/689486922128687170/unknown.png" alt="Graph"/>
        </div>
  
        <div className="months">
          <h3 id="months_title">Months</h3>
          <ul>
            <li><a href=''>January</a></li>
            <li><a href=''>February</a></li>
            <li><a href=''>March</a></li>
            <li><a href=''>April</a></li>
            <li><a href=''>May</a></li>
            <li><a href=''>June</a></li>
            <li><a href=''>July</a></li>
            <li><a href=''>August</a></li>
            <li><a href=''>September</a></li>
            <li><a href=''>October</a></li>
            <li><a href=''>November</a></li>
            <li><a href=''>December</a></li>
          </ul>
        </div>
  
        <section className="Dishes">
    <input id="dishes-input" type="text" placeholder="Dishes" />
    <div className="dropdown">
      <input id="dishes-input2" type="text" placeholder="Ingridients"/>
      <div id="myDropdown" className="dropdown-content">
       <a href="#Chicken">Chicken</a>
       <a href="#Beef">Beef</a>
       <a href="#Pork">Pork</a>
     </div>
    </div>
      
      <div className="displayed-dishes">
      {/*
            posts.length ?
          posts.map(post => <h2 id="dish-name" key={post.id}>{post.name}
          <img id="dishes_photo" src={post.img_url}/></h2>) :
                null
      */}
    </div>
     
    </section> 
        <div className="discount-applicator">
          <h2>Change discount:</h2>
          <input id="discountAmount" type="number" placeholder="new discount" min="1" max="100"/>
          <button id="submitDiscountButton" type="submit" value="submit" onClick={()=>{ alert('Discount was applied'); }}>Submit</button>
        </div>
  
        </section>
      )
  }
}


export default Section;
