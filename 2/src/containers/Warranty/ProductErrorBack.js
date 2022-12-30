import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Warranty.scss';
import ModalProductErrorBack from './WarrantyModals/ModalProductErrorBack';
class ProductErrorBack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenProductErrorBack: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewOrder = () => {
        this.setState({
            isOpenProductErrorBack: true
        })
    }

    toggleProductErrorBackModal = () => {
        this.setState({
            isOpenProductErrorBack: !this.state.isOpenProductErrorBack,
        })
    }



    render() {
        return (

            <div className='warranty-container'>
                <ModalProductErrorBack
                    isOpen={this.state.isOpenProductErrorBack}
                    toggleFromParent={this.toggleProductErrorBackModal}

                />

                <div className='title text-center'>Trung chuyển sản phẩm lỗi không sửa được </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductErrorBack);
