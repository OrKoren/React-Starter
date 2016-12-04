import React from 'react'
import ReactDOM from 'react-dom'
import { Router , browserHistory, Route, hashHistory } from 'react-router'
import App from './App'
import Dashboard from './dashboard/Dashboard'
import AccountTracking from './react/account_tracking/AccountTracking'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account_tracking" component={AccountTracking} />
    </Router>
), document.getElementById('app'));

