import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const OverviewBar = (props) => {
    const user = props.info;
    return(
        <div className='nav-bar'>
            <NavLink activeStyle={
                {color: '#000',
                fontWeight: 'bold',
                borderBottom: '2px solid #e36209'}
            }exact to={`/userpage/${user.login}/`}>Overview</NavLink>

            <NavLink activeStyle={
                {color: '#000',
                fontWeight: 'bold',
                borderBottom: '2px solid #e36209'}
            } 
            to={`/userpage/${user.login}/repos`}
            >{`Repositories ${user.public_repos}`}</NavLink>

            <NavLink activeStyle={
                {color: '#000',
                fontWeight: 'bold',
                borderBottom: '2px solid #e36209'}
            } 
            to={`/userpage/${user.login}/starred`}
            >{`Starred`}</NavLink>

            <NavLink activeStyle={
                {color: '#000',
                fontWeight: 'bold',
                borderBottom: '2px solid #e36209'}
            } 
            to={`/userpage/${user.login}/followers`}>
            {`Followers ${user.followers}`}</NavLink>

            <NavLink activeStyle={
                {color: '#000',
                fontWeight: 'bold',
                borderBottom: '2px solid #e36209'}
            } 
            to={`/userpage/${user.login}/following`}>
            {`Following ${user.following}`}</NavLink>
            
        </div>
    );
};

export default OverviewBar;