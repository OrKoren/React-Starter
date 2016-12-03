import React from 'react'
import ReactDOM from 'react-dom'
import { Router , browserHistory, Route } from 'react-router'
import App from './App'
import Dashboard from './dashboard/Dashboard'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
    </Router>
), document.getElementById('app'));

