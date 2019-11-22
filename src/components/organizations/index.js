import React from 'react';

import './style.css';

export default class Organizations extends React.Component{
    state = {
        orgs: [],
    }

    componentDidUpdate(){
        fetch(this.props.org)
        .then(response => response.json())
        .then(orgs => this.setState({ orgs }));
    }

    render(){
        return(
            <div className='orgs-content'>{
                this.state.orgs.map(org => 
                    <a href={`https://github.com/${org.login}`} 
                    key={org.id} 
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={org.avatar_url} alt='org_url' />
                    </a>
                )
            }</div>
        )
    }
}