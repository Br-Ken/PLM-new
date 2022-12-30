import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductlineManage from '../containers/BigCorp/ProductlineManage';
// import FacilityManage from '../containers/BigCorp/FacilityManage';
import ManufactoryManage from '../containers/BigCorp/ManufactoryManage';
import DistributionManage from '../containers/BigCorp/DistributionManage';
import WarrantyManage from '../containers/BigCorp/WarrantyManage';
import Header from '../containers/Header/Header';
class BigCorp extends Component {
    render() {
        const { BigCorpMenuPath } = this.props;
        return (

            <div className="BigCorp-container">
                <Header />
                <div className="BigCorp-list">
                    <Switch>
                        <Route path="/BigCorp/productline-manage" component={ProductlineManage} />
                        <Route path="/BigCorp/manufactory-manage" component={ManufactoryManage} />
                        <Route path="/BigCorp/distribution-manage" component={DistributionManage} />
                        <Route path="/BigCorp/warranty-manage" component={WarrantyManage} />
                        <Route component={() => { return (<Redirect to={BigCorpMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        BigCorpMenuPath: state.app.BigCorpMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BigCorp);
