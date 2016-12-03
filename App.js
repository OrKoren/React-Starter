import React from 'react'
import {Link} from 'react-router'

const divInfoStyle = {
    width: '50%'
}

class App extends React.Component {
    render() {
        return (
            <div>
                <aside className="control-sidebar control-sidebar-light">
                </aside>
                <div className="control-sidebar-bg"></div>
                
                <h1>Please Navigate</h1>
                <Link to="/dashboard">Dashboard2</Link>
            </div>
            )
    }
}

export default App