/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <th key={this.props.header}>{this.props.header}</th>
        )
    }
}

export default Header;