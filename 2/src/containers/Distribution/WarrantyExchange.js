import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Distribution.scss'
import ModalWarrantyManage from './DistributionModals/ModalWarrantyManage';
//import './WarrantyExchange.scss';
//import { getAllproducts } from '../../services/userService';
class WarrantyExchange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalWarrantyManage: false

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */
    handleAddNewWarrantyExchange = () => {
        this.setState({
            isOpenModalWarrantyManage: true
        })
    }
    toggleWarrantyExchangeModal = () => {
        this.setState({
            isOpenModalWarrantyManage: !this.state.isOpenModalWarrantyManage
        })
    }



    render() {
        return (
            <div className='distribution-container'>
                <ModalWarrantyManage
                    isOpen={this.state.isOpenModalWarrantyManage}
                    toggleFromParent={this.toggleWarrantyExchangeModal}

                />
                <div className='title text-center'>Quản lý sản phẩm bảo hành</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewWarrantyExchange()}
                    ><i className="fas fa-plus"></i>Thêm mới</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Distribution">
                        <tr>
                            <th>Thể loại</th>
                            <th>Mã sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Mã đơn vị phân phối</th>
                            <th>Trạng thái</th>
                            <th>Số lần bảo hành</th>
                            <th>Ghi chú lỗi</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(WarrantyExchange);
