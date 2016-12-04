/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';
import InfoBox from '../../adminlte/components/InfoBox';
import Box from '../../adminlte/components/Box';

class AccountTracking extends React.Component {
    render() {
        let headers = ["ID", "Data Breach Source", "Detection Date", "Detection Count"];
        let data= []
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <section class="content-header">
                            <h3>
                                Account Tracking
                                <small>&emsp;Cyber Analysis</small>
                            </h3>
                        </section>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-4">
                        <InfoBox infoKey="MONITORED ACCOUNT" infoValue="gilad@hacked-db.com" iconType="bg-aqua" iconFlag="fa-envelope-o"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <InfoBox infoKey="Watchguard Status" infoValue="Enabled" iconType="bg-green" iconFlag="fa-flag-o"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <Box headers={headers} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountTracking;