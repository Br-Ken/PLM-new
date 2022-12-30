import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './BigCorp.scss';
import ModalFacilityManage from './ModalFacilityManage';
class ManufactoryManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalFacility: false,
        }
    }

    componentDidMount() {
    }

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
                <div className='title text-center'>Quản lý danh mục các cơ sở sản xuất</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewFacility()}
                    ><i className="fas fa-plus"></i>Thêm cơ sở sản xuất mới</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManufactoryManage);
