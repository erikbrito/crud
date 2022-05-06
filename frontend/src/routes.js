import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Read from './pages/read'
import Create from './pages/create'
import Update from './pages/update'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Read} />
            <Route path='/create' component={Create} />
            <Route path='/update' component={Update} />
        </Switch>
    </BrowserRouter>
)

export default Routes