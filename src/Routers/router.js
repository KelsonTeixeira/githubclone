import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import UserPage from '../pages/Userpage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/userpage/:username' component={UserPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;