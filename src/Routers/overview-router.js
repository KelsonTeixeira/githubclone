import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import OverviewBar from '../components/OverviewBar';
import Folders from '../components/Folders';
import Repositories from '../components/Repositories';
import Follow from '../components/Follow';


const Routes = (props) =>{
    const info = props.info;
    return(
        <BrowserRouter>
            <OverviewBar info={props.info} />
            <Switch>
                <Route exact path={`/userpage/${info.login}/`} 
                    render={(routerProps) => <Folders {...routerProps}
                    folders={`${info.login}/repos`} />}
                />
                <Route exact path={`/userpage/${info.login}/repos`} 
                    render={(routerProps) => <Repositories {...routerProps} 
                    repos={`${info.login}/repos`} />} 
                />
                <Route exact path={`/userpage/${info.login}/starred`} 
                    render={(routerProps) => <Repositories {...routerProps} 
                    repos={`${info.login}/starred`} />} 
                />
                <Route exact path={`/userpage/${info.login}/followers`} 
                    render={(routerProps) => <Follow {...routerProps} 
                    follow={`${info.login}/followers`} />}
                />
                <Route exact path={`/userpage/${info.login}/following`}
                    render={(routerProps) => <Follow {...routerProps} 
                    follow={`${info.login}/following`} />} 
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;