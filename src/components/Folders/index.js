import React from 'react';

import './style.css';

import fork from './fork.png';
import star from './star.png';

export default class Folders extends React.Component{
    state = {
        folders : [],
        showFolders: [],
    }

    componentDidMount = async () => {
        await fetch(`https://api.github.com/users/${this.props.folders}`)
        .then(response => response.json())
        .then(folders => this.setState( { folders }));

        if(this.state.folders.length > 6){
            const { folders } = this.state;
            let showFolders = [];
            for(let i = 0; i < 6; i++){
                showFolders.push(folders[i]);
            }
            this.setState({ showFolders });
        }else{
            const { folders } = this.state;
            this.setState({ showFolders: folders});
        }
    }

    render(){
        const { showFolders } = this.state;
        return(
            <div className='folder-container'>
            <h1>The first repositories</h1>
                <div className='repositories'>{
                    showFolders.map(folder => (
                        <div className='folder-box' key={folder.id}>

                        <a href={folder.html_url} 
                        target='_blank'
                        rel="noopener noreferrer">{folder.name}
                        </a>

                        <p>{folder.description}</p>

                        <div className='folder-info'>
                            <p>{folder.language}</p>
                            <img src={fork} alt='fork' />
                            <p>{folder.forks}</p>
                            <img src={star} alt='star' />
                            <p>{folder.watchers}</p>
                        </div>
                    </div>
                    ))
                }</div>
            </div>
        )
    }
}