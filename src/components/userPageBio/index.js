import React from 'react';
import './style.css';

import Organizations from '../organizations';

const UserPageBio = (props) => {
    const bio = props.userBio;

    return(
       <div className='bio-box'>
            <img src={bio.avatar_url} alt='avatar_url' />
            <h1>{bio.name}</h1>
            <h2>{bio.login}</h2>
            <p>{bio.bio}</p>
            <div className='organizations'>
                <p>Organizations</p>
                <Organizations org={bio.organizations_url} />
            </div>
       </div>
    );
}

export default UserPageBio;