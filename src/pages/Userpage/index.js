import React, { Component } from 'react';
import Api from '../../services/api';

import './style.css';

import UserPageBio from '../../components/userPageBio';
import Overview from '../../components/overview';

export default class UserPage extends Component {
    state = {
        user: [],
    }

    async componentDidMount () {
        const { username } = this.props.match.params;
        
        const userInfo = await Api.get(`/${username}`);
        this.setState({ user: userInfo.data});

    }

    render(){
        return(
            <div className='user-page'>
                 <UserPageBio userBio={this.state.user} />
                 <Overview user={this.state.user} />
            </div>
        );
    }
}