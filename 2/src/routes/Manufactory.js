import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

import HeaderManufactory from '../containers/Header/HeaderManufactory';
import DistributionMove from '../containers/Manufactory/DistributionMove';
import StockManage from '../containers/Manufactory/StockManage';
import WarrantyRecieve from '../containers/Manufactory/WarrantyRecieve';

class Manufactory extends Component {
    render() {
        const { ManufactoryMenuPath } = this.props;
        return (
            <div className="Manufactory-container">
                <HeaderManufactory />
                <div className="Manufactory-list">
                    <Switch>
                        <Route path="/Manufactory/distribution-move" component={DistributionMove} />
                        <Route path="/Manufactory/stock-manage" component={StockManage} />
                        <Route path="/Manufactory/warranty-recieve" component={WarrantyRecieve} />
                        <Route component={() => { return (<Redirect to={ManufactoryMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ManufactoryMenuPath: state.app.ManufactoryMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manufactory);
