import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

import HeaderWarranty from '../containers/Header/HeaderWarranty';
import ProductBack from '../containers/Warranty/ProductBack';
import ProductReceive from '../containers/Warranty/ProductReceive';
import ProductErrorBack from '../containers/Warranty/ProductErrorBack';
class Warranty extends Component {
    render() {
        const { WarrantyMenuPath } = this.props ;
        return (
            
            <div className="Warranty-container">
                <HeaderWarranty/>
                <div className="Warranty-list">
                    <Switch>
                        <Route path="/Warranty/product-back" component={ProductBack} />
                        <Route path="/Warranty/product-error-back" component={ProductErrorBack} />
                        <Route path="/Warranty/product-receive" component={ProductReceive} />
                        <Route component={() => { return (<Redirect to={WarrantyMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        WarrantyMenuPath: state.app.WarrantyMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);
