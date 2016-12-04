/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';
import Header from '../../react/components/Header';
import Row from '../../react/components/Row';

class Box extends React.Component {
    render(){
        let headers = [];
        this.props.headers.forEach(header => {
            headers.push(<Header header={header}/>)
        });

        let tds = ["1", "pastebin.com", "11-7", "label"];
        return (
            <div className="box">
                <div className="box-header">
                    <h3 className="box-title">Data Breach Detection Report</h3>
                    
                </div>

                <div className="box-body table-responsive no-padding">
                    <table className="table table-hover">
                        <tbody>
                        <tr>
                            {headers}
                        </tr>
                            <Row tds={tds}/>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Box;