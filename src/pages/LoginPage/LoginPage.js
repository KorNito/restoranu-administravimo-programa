import React, { Component } from 'react'

import {Dashboard} from '../Dashboard/Dashboard'

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './LoginPage.css'

import axios from 'axios'

export class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: undefined,
            password: undefined,
        }
    }
    
    changeHandler = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    // setAuthorizationToken(token){
    //     if(token){
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    //     } else {
    //         delete axios.defaults.headers.common['Authorization'];
    //     }
    // }

    submitHandler = (e) => { 
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        axios({
            method: 'post',
            url:'https://protected-brook-06093.herokuapp.com/authenticate',
            data: {
                'username': this.state.username,
                'password': this.state.password,
            }
        })
        .then(response => {
            console.log(response)
            const token = response.data.jwt;
            localStorage.setItem('jwt', token);
            console.log(token);
            this.props.history.push('/dashboard');
            
        })
        .catch(error => {
            console.log(error)
        })       
    }

    render() {
        const {username, password} = this.state
        return (
            
            <div>

                <div className="bg"></div>
                <form id='login-form' method='post' onSubmit={this.submitHandler}>
                    <input className="username" type="text" name="username" placeholder="Username" required value={username} onChange={this.changeHandler}/>
                    <input className="password" type="password" name="password" placeholder="Password" required value={password} onChange={this.changeHandler}/>
                    <button className="Login" type='submit'>Login</button>
                    <label className='form-switch'><span>| Forgot password</span></label>
                </form>
            </div>
        )
    }
}

export default LoginPage
