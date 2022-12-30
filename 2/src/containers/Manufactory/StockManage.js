import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
//import { getAllproducts } from '../../services/userService';
import ModalStockManage from './ManufactoryModals/ModalStockManage';
class StockManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalStockManage: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenModalStockManage: true
        })
    }

    toggleStockManage = () => {
        this.setState({
            isOpenModalStockManage: !this.state.isOpenModalStockManage,
        })
    }

    render() {
        return (
            <div className='manufactory-container'>
                <ModalStockManage
                    isOpen={this.state.isOpenModalStockManage}
                    toggleFromParent={this.toggleStockManage}
                />
                <div className='title text-center'>Cập nhật sản phẩm vào kho</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewOrder()}
                    ><i className="fas fa-plus"></i>Thêm sản phẩm</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Manufactory">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Sản phẩm</th>
                            <th>Thời gian sản Xuất</th>
                            <th>Giá bán</th>
                            <th>Ảnh minh họa </th>
                            <th>Trạng thái</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(StockManage);
