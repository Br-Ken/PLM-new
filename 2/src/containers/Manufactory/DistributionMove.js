import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Manufactory.scss';
//import { getAllproducts } from '../../services/userService';
import ModalDistributionMove from './ManufactoryModals/ModalDistributionMove';
class DistributionMove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalDistributionMove: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenModalDistributionMove: true
        })
    }

    toggleDistributionMove = () => {
        this.setState({
            isOpenModalDistributionMove: !this.state.isOpenModalDistributionMove,
        })
    }

    render() {
        return (
            <div className='manufactory-container'>
                <ModalDistributionMove
                    isOpen={this.state.isOpenModalDistributionMove}
                    toggleFromParent={this.toggleDistributionMove}
                />
                <div className='title text-center'>Xuất sản phẩm đến đơn vị phân phối</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewOrder()}
                    ><i className="fas fa-plus"></i>Thêm đơn</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Manufactory">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Thời gian chuyển</th>
                            <th>Trạng thái</th>
                            <th>Mã đơn vị phân phối</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(DistributionMove);
