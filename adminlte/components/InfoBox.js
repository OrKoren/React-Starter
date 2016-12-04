/**
 * Created by orkoren on 03/12/2016.
 */
import React from 'react';

class InfoBox extends React.Component {
    render() {
        let iconType = this.props.iconType == null ? "info-box-icon bg-aqua" : ("info-box-icon " + this.props.iconType);
        let iconFlag = this.props.iconFlag == null ? "fa fa-envelope-o" : ("fa " + this.props.iconFlag);
        return (
            <div>
                <div className="info-box" style={this.props.style}>
                    <span className={iconType}><i className={iconFlag}></i></span>
                    <div className="info-box-content">
                        <span className="info-box-text">{this.props.infoKey}</span>
                        <span className="info-box-number">{this.props.infoValue}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default InfoBox;
