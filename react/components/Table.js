/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    render() {
        var that = this;
        return (
            <div className="table-responsive">
                <h2>{this.props.title}</h2>
                <table className="table table-bordered table-striped userTable">
                    <thead>
                    <Headers headers={this.props.headers}/>
                    </thead>
                    <tbody>
                    {that.props.data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;