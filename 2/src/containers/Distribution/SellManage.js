import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Distribution.scss'
import ModalSellManage from './DistributionModals/ModalSellManage';

//import './SellManage.scss';
//import { getAllproducts } from '../../services/userService';
class SellManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalSellManage: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenModalSellManage: true
        })
    }

    toggleSellManageModal = () => {
        this.setState({
            isOpenModalSellManage: !this.state.isOpenModalSellManage,
        })
    }
    render() {
        return (
            <div className='distribution-container'>
                <ModalSellManage
                    isOpen={this.state.isOpenModalSellManage}
                    toggleFromParent={this.toggleSellManageModal}
                />
                <div className='title text-center'>Quản lý bán hàng</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewOrder()}
                    ><i className="fas fa-plus"></i>Thêm đơn</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Distribution">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Thời gian bảo hành</th>
                            <th>Trạng thái</th>
                            <th>Email người mua</th>
                            <th>Số điện thoại người mua</th>
                            <th></th>
                        </tr>



                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellManage);
