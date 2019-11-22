import React from 'react';

import './style.css';

//import icons
import fork from './fork.png';
import star from './star.png';

export default class Repositories extends React.Component{
    state = {
        repos: [],
        search: '',
    }

    componentDidMount = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/${this.props.repos}`)
        .then(response => response.json())
        .then(repos => this.setState({ repos }));
    }

    componentDidUpdate = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/${this.props.repos}`)
        .then(response => response.json())
        .then(repos => this.setState({ repos }));
    }

    setSearch = async (event) => {
        const search = await event.target.value
        this.setState({ search });
    }


    render(){
        const { repos } = this.state;
        const show = repos.filter(repo => repo.name
        .toLowerCase().includes(this.state.search));
        return(
            <div className='repo-conteiner'>

                <input type='search' 
                placeholder='Find a repository...' 
                onChange={this.setSearch} 
                />

                <div>{
                    show.map(repo => (

                        <div className='repo-box' key={repo.id}>

                            <a href={repo.html_url} 
                            target='_blank'
                            rel="noopener noreferrer">{repo.name}
                            </a>

                            <p>{repo.description}</p>

                            <div className='repo-info'>
                                <p>{repo.language}</p>
                                <img src={fork} alt='fork' />
                                <p>{repo.forks}</p>
                                <img src={star} alt='star' />
                                <p>{repo.watchers}</p>
                            </div>
                        </div>
                    ))
                }</div>
            </div>
        );
    }
}