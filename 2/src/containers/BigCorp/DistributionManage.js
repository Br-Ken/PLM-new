import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../BigCorp/BigCorp.scss';
import ModalFacilityManage from './ModalFacilityManage';
class DistributionManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalFacility: false,

        }
    }


    /*async componentDidMount() {
        let response = await getAllproducts('ALL');
        console.log('get product data from node.js', response)

    } */

    handleAddNewFacility = () => {
        this.setState({
            isOpenModalFacility: true
        })
    }

    toggleFacilityModal = () => {
        this.setState({
            isOpenModalFacility: !this.state.isOpenModalFacility,
        })
    }



    render() {
        return (

            <div className='facility-container'>
                <ModalFacilityManage
                    isOpen={this.state.isOpenModalFacility}
                    toggleFromParent={this.toggleFacilityModal}

                />

                <div className='title text-center'>Quản lý danh mục các đơn vị phân phối</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewFacility()}
                    ><i className="fas fa-plus"></i>Thêm đơn vị phân phối mới</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="BigCorp">
                        <tr>
                        <th>ID</th>
                            <th>Liên hệ</th>
                            <th>Địa chỉ email</th>
                            <th>Địa chỉ</th>
                            <th>Tên Admin</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(DistributionManage);
