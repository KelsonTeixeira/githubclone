import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './img/git.png';

import './style.css';

export default class Login extends Component {
    state = {
        inputValue: '',
    }

    setValue = async (event) => {
        await this.setState({ inputValue: event.target.value});
        console.log(this.state.inputValue);
    }

    render () {
        return (
            <div className='login-page'>
                <div className='login-form' >
                    <img src={Icon} alt='github icon'/>
                    <h1>Sign in to GitHub copy</h1>
                    <div className='username-box'>
                        <label>GitHub's Username</label>
                        <input type='text' placeholder='username'
                         onChange={this.setValue} />
                        <Link to={`/userpage/${this.state.inputValue}`}>Send</Link>
                    </div>
                    <a href='https://github.com'>This site github folder here</a>
                </div>   
            </div>
        );
    }
}