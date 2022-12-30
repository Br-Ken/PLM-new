import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import  {handleLoginApi}  from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false
        }
    }


    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async() => {
        console.log('email: ', this.state.email, 'password: ',  this.state.password)
        console.log('all state ',  this.state)
        try {
            await handleLoginApi(this.state.username, this.state.password);
        } catch (e) {
            console.log(e)
        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })

    }
    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 text-login'>ProductionMove Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Email</label>
                            <input type='email' className='form-control' placeholder='Enter your email' value={this.state.email}
                            onChange={(event) => this.handleOnChangeEmail(event)}></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input className='form-control'
                                type = {this.state.isShowPassword ? 'text' : 'password'}
                                placeholder='Enter your password' value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}></input>
                                <span onClick = {() => this.handleShowHidePassword()}>  
                                    <i class= {this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}}>Login</button>

                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const redirectToBigCorpPage = () => {
    const { navigate } = this.props;
    const redirectPath = '/BigCorp/productline-manage';
    navigate(`${redirectPath}`);
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
