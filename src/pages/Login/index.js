import React, { Component } from 'react';
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

    setSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/userpage/${this.state.inputValue}`);
    }

    render () {
        return (
            <div className='login-page'>
                <div className='login-form' >
                    <img src={Icon} alt='github icon'/>

                    <h1>Sign in to GitHub copy</h1>

                    <form className='username-box' onSubmit={this.setSubmit}>
                        <label>GitHub Username:</label>
                        <input type='text' placeholder='username'
                         onChange={this.setValue} />
                        <button type="submit">Send</button>
                    </form>

                    <a href='https://github.com'>This site github folder here</a>
                </div>   
            </div>
        );
    }
}