import React from 'react'
import {Link} from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Starter</h1>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            )
    }
}

export default App