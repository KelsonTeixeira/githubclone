import React from 'react';
import Routes from '../../Routers/overview-router';

import './style.css'

const Overview = (props) => (
    <div className='overview-conteiner'>
        <Routes info={props.user}/>
    </div>
);

export default Overview;