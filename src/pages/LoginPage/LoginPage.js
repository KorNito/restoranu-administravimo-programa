import React, { Component } from 'react'

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import {Dashboard} from '../Dashboard/Dashboard'

import './LoginPage.css'

import axios from 'axios'

export class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    setAuthorizationToken(token){
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }

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

        })
        .catch(error => {
            console.log(error)
        })       
    }

    render() {
        const {username, password} = this.state
        return (
            
            <div>

                <div id="bg"></div>

                    <input type='checkbox' id='form-switch'/>

                <form id='login-form' method='post' onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" required value={username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Password" required value={password} onChange={this.changeHandler}/>
                    <button type='submit'>Login</button>
                    <label for='form-switch'><span>| Forgot password</span></label>
                </form>
                {/*
                <form id='register-form' action="" method='post'>
                    <input type="text" placeholder="Username" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Re Password" required/>
                    <button type='submit'>Register</button>
                    <label for='form-switch'>Already Member ? Sign In Now..</label>
                </form>

                <form id='forgot_password_form' action="" method='post'>
                    <input type="email" placeholder="Email" required/>
                    <button type='submit'>Send</button>
                    <label for='form-switch'>Go back to login</label>
                </form>    */}
            </div>
        )
    }
}

export default LoginPage
