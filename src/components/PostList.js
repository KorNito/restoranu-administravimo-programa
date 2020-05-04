import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
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

    submitHandler = (e) => {
        console.log(this.state)
        axios.post('https://protected-brook-06093.herokuapp.com/authenticate', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        const {username, password} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostList