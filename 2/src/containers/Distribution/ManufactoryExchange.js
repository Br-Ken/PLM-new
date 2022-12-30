import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import ModalFacilityManage from '../BigCorp/ModalFacilityManage';
import './Distribution.scss'
import ModalStockManage from './DistributionModals/ModalStockManage';

//  import './ManufactoryExchangee.scss';
//import { getAllproducts } from '../../services/userService';
class ManufactoryExchange extends Component {

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
    handleAddNewProduct = () => {
        this.setState({
            isOpenModalStockManage: true
        })
    }


    toggleManufactoryExchangeModal = () => {
        this.setState({
            isOpenModalStockManage: !this.state.isOpenModalStockManage,
        })
    }


    render() {
        return (
            <div className='distribution-container'>
                <div className='title text-center'>Nhập/hoàn trả sản phẩm</div>
                <ModalStockManage
                    isOpen={this.state.isOpenModalStockManage}
                    toggleFromParent={this.toggleManufactoryExchangeModal}
                />
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewProduct()}
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
                            <th>Mã cơ sở sản xuất</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManufactoryExchange);
