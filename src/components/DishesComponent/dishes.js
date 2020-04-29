import React, { Component } from 'react'

export class dishes extends Component {
    render() {
        return (
            <div>
                <div className="Dishes">
    <input id="dishes-input" type="text" placeholder="Dishes"/>
    <div className="dropdown">
      <input id="dishes-input2" type="text" placeholder="Ingridients"/>
      <div id="myDropdown" className="dropdown-content">
       <a href="#Chicken">Chicken</a>
       <a href="#Beef">Beef</a>
       <a href="#Pork">Pork</a>
     </div>
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
            </div>
        )
    }
}

export default dishes
