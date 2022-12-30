import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalWarrantyManage extends Component {

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
                className="modal-Distribution-container"
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Chuyển sản phẩm lỗi đến/Nhận sản phẩm đã sửa từ TRUNG TÂM BẢO HÀNH </ModalHeader>
                <ModalBody>
                    <div className='modal-Distribution-body'>
                        <div className='input-container'>
                            <label>Thể loại</label>
                            <select>
                                <option>Chuyển sản phẩm bảo hành/triệu hồi </option>
                                <option>Nhận sản phẩm đã sửa</option>
                                <option>Nhận lại sản phẩm lỗi không sửa được</option>
                            </select>
                        </div>

                        <div className='input-container'>
                            <label>Mã sản phẩm</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Số lượng</label>
                            <input type='number' />
                        </div>
                        <div className='input-container'>
                            <label>Mã đơn vị phân phối</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Mã trung tâm bảo hành</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Trạng thái</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalWarrantyManage);



