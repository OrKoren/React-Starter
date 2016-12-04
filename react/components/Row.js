/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';

class Row extends  React.Component {
    render() {
        let tds = [];
        this.props.tds.forEach(td => {
           tds.push(<Td value={td}/>)
        });
        return (
            <tr>
                {tds}
            </tr>    
        )
    }
}

class Td extends React.Component {
    render() {
        return (
            <td>{this.props.value}</td>
        )
    }
}

export default Row;