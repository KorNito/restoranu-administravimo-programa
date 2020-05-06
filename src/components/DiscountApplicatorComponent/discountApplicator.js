import React, { Component } from 'react'

import './discountApplicator.css';

import axios from 'axios';

const jwt = localStorage.getItem('jwt');

export class discountApplicator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            price: undefined,
            name: undefined,
        }
    }

    changeHandler = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    submitHandler = (e) => { 
        e.preventDefault()
        axios({
            method: 'patch',
            url:'https://protected-brook-06093.herokuapp.com/changePrice',
            headers: {
                'Authorization': `Bearer ` + jwt,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                'price': this.state.price,
                'name': this.state.name,
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })       
    }

    render() {
        const {price, name} = this.state
        return (
            <div className="discount-applicator">
                <h2 id="discount-applicator-title">Change price:</h2>
                <form method='patch' onSubmit={this.submitHandler}>
                    <input id="discount-amount" type="text" name="price" placeholder="New price" value={price} onChange={this.changeHandler}/>
                    <input id="dish-name" type="text" name="name" placeholder="Dish Name" value={name} onChange={this.changeHandler}/>
                    <button id="submitDiscountButton" type="submit">Submit</button>
                </form>
            </div>  
        )
    }
}

export default discountApplicator
