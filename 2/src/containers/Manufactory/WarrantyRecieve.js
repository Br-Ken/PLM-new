import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Manufactory.scss';
import ModalWarrantyReceive from './ManufactoryModals/ModalWarrantyReceive';
//import { getAllproducts } from '../../services/userService';
class WarrantyRecieve extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalWarrantyReceive: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenModalWarrantyReceive: true
        })
    }

    toggleWarrantyReceive = () => {
        this.setState({
            isOpenModalWarrantyReceive: !this.state.isOpenModalWarrantyReceive,
        })
    }

    render() {
        return (
            <div className='manufactory-container'>
                <ModalWarrantyReceive
                    isOpen={this.state.isOpenModalWarrantyReceive}
                    toggleFromParent={this.toggleWarrantyReceive}
                />
                <div className='title text-center'>Nhập lại sản phẩm lỗi</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewOrder()}
                    ><i className="fas fa-plus"></i>Thêm đơn</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Manufactory">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Lỗi</th>
                            <th>Thời gian chuyển đến</th>
                            <th>Trạng thái</th>
                            <th>Mã trung tâm bảo hành</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(WarrantyRecieve);
