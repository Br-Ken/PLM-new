import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProductBack extends Component {

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
                className="modal-Warranty-container"
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Hoàn trả sản phẩm đã sửa xong</ModalHeader>
                <ModalBody>
                    <div className='modal-Warranty-body'>
                        <div className='input-container'>
                            <label>Mã sản phẩm</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Lỗi</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Thời gian Chuyển</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Trạng thái</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Mã đơn vị phân phối</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductBack);



