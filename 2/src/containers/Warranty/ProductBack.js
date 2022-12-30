import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Warranty.scss';
import ModalProductBack from './WarrantyModals/ModalProductBack';
class ProductBack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalProductBack: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenModalProductBack: true
        })
    }

    toggleProductBackModal = () => {
        this.setState({
            isOpenModalProductBack: !this.state.isOpenModalProductBack,
        })
    }



    render() {
        return (

            <div className='warranty-container'>
                <ModalProductBack
                    isOpen={this.state.isOpenModalProductBack}
                    toggleFromParent={this.toggleProductBackModal}

                />

                <div className='title text-center'>Trả sản phẩm đã sửa chữa xong</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewOrder()}
                    ><i className="fas fa-plus"></i>Trả sản phẩm</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Warranty">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Lỗi</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductBack);
