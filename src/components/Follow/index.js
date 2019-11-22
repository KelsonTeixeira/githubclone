import React from 'react';

import './style.css';

export default class Followers extends React.Component{
    state = {
        follow: [],
    }

    componentDidMount = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/${this.props.follow}`)
        .then(response => response.json())
        .then(follow => this.setState( { follow }));
    }

    componentDidUpdate = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/${this.props.follow}`)
        .then(response => response.json())
        .then(follow => this.setState( { follow }));
    }
    
    render(){
        const { follow } = this.state;
        return (
            <div className='follow-conteiner'>{
                follow.map(follow => (
                    <div className='follow-box' key={follow.id}>
                        <img src={follow.avatar_url} alt='avatar' />
                        <a href={follow.html_url}>{follow.login}</a>
                    </div>
                ))
            }</div>
        )
    }
}