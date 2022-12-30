import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import ManufactoryExchange from '../containers/Distribution/ManufactoryExchange';
import SellManage from '../containers/Distribution/SellManage';
import WarrantyExchange from '../containers/Distribution/WarrantyExchange';
import HeaderDistribution from '../containers/Header/HeaderDistribution';


class Distribution extends Component {
    render() {
        const { DistributionMenuPath } = this.props ;
        return (
            
            <div className="Distribution-container">
                <HeaderDistribution/>
                <div className="Distribution-list">
                    <Switch>
                        <Route path="/Distribution/manufactory-exchange" component={ManufactoryExchange} />
                        <Route path="/Distribution/sell-manage" component={SellManage} />
                        <Route path="/Distribution/warranty-exchange" component={WarrantyExchange} />
                        <Route component={() => { return (<Redirect to={DistributionMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        DistributionMenuPath: state.app.DistributionMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Distribution);
