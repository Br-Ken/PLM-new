import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './BigCorp.scss';
import ModalProductline from './ModalProductline';
//import { getAllproducts } from '../../services/userService';
class ProductlineManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalProductline: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewProductline = () => {
        this.setState({
            isOpenModalProductline: true
        })
    }

    toggleProductlineModal = () => {
        this.setState({
            isOpenModalProductline: !this.state.isOpenModalProductline,
        })
    }


    render() {
        return (
            <div className='productline-container'>
                <ModalProductline
                    isOpen={this.state.isOpenModalProductline}
                    toggleFromParent={this.toggleProductlineModal}

                />
                <div className='title text-center'>Quản lý danh mục dòng sản phẩm</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewProductline()}
                    ><i className="fas fa-plus"></i>Thêm sản phẩm mới</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="BigCorp">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Thời gian sản xuất</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductlineManage);
