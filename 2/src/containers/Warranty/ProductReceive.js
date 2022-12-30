import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Warranty.scss';
//import ModalProductReceive from './ModalProductReceive';
class ProductReceive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //isOpenModalDistribution: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewDistribution = () => {
        this.setState({
            //isOpenModalDistribution: true
        })
    }

    toggleDistributionModal = () => {
        this.setState({
            //isOpenModalDistribution: !this.state.isOpenModalDistribution,
        })
    }



    render() {
        return (

            <div className='warranty-container'>
                {/* <ModalProductReceive
                    isOpen={this.state.isOpenModalDistribution}
                    toggleFromParent={this.toggleDistributionModal}

                />  */}

                <div className='title text-center'>Bảo hành sản phẩm</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewDistribution()}
                    ><i className="fas fa-plus"></i>Nhận sản phẩm bảo hành</button>
                    <button className='btn btn-primary px-3 mx-3'
                        onClick={() => this.handleAddNewDistribution()}
                    ><i className="fas fa-plus"></i>Nhận sản phẩm triệu hồi</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="Warranty">
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Thời gian nhận</th>
                            <th>Trạng thái</th>
                            <th>Nhập từ</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductReceive);
