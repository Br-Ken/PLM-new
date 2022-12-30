import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalFacilityManage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();

    }

    render() {
        console.log('check child props', this.props);
        console.log('check child open modal', this.props.isOpen)
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className="modal-BigCorp-container"
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Thêm tài khoản</ModalHeader>
                <ModalBody>
                    <div className='modal-BigCorp-body'>
                        <div className='input-container'>
                            <label>ID</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Liên hệ</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Địa chỉ email</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Họ và tên Admin</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Email Admin</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Số điện thoại</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Mật khẩu</label>
                            <input type='text' />
                        </div>

                    </div>



                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.toggle() }} >
                        Lưu thay đổi
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Hủy
                    </Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalFacilityManage);



