import React, { useState, useEffect } from 'react';
import {Container, Button, Modal, ModalHeader, Col, ModalBody, ModalFooter, Label,Input, Row} from 'reactstrap';
import axios from 'axios';

const NewModal = (props) => {
const {labelname} = props;

const [modal, setModal] = useState(false);
const [nestedModal, setNestedModal] = useState(false);
const [closeAll, setCloseAll] = useState(false);

console.log('id',labelname);

const [posts, setPosts] = useState([]);
// useEffect(()=>{
//     axios.get('http://127.0.0.1:8000/leads/Leads')
//         .then(res => {
//             console.log('respone',res.data);
//             setPosts(res.data);
//         })
//         .catch(err =>{
//             console.log(err);
//             alert("error no data get");
//         })
//     },[])

const toggle = () => setModal(!modal);
const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);   
}
const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
}	
const changeStatus = () =>{
    alert("changeStatus")
}
  return (
    <div>
        <Label name="new" onClick={toggle} >{labelname}</Label>
        <Modal className="modal-dailog modal-lg" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{labelname}</ModalHeader>
            <ModalBody>
                <Container>
                    <Row className="pl-2">
                        <Col md="8" className="px-2">
                            <Row>
                                <Col md="12">
                                   <b>URL</b>
                                    {
                                       posts.map(post =>
                                           <p key={post.id}>{post.title} {post.status}</p>)
                                    }
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <b>description</b>
                                    
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col>
                                    <h4>Prospect Details</h4>
                                </Col>
                            </Row>
                            <Row className="p-2">
                                <Col>
                                    <Label className="d-block">fullname</Label>
                                    <Label className="d-block">email</Label>
                                    <Label className="d-block">company</Label>
                                </Col>
                                <Col>
                                    <Label className="d-block">skype id</Label>
                                    <Label className="d-block">phone no</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Attachments</Label>
                                </Col>
                            </Row>

                        </Col>
                        <Col md="4" className="px-3">
                            <Button color="warning" block disabled>New</Button>
                            <Label className="mt-3">
                                <b className="d-block">Tags</b>
                                lorem ipsum, or lipsum
                            </Label>
                            <Label className="mt-3">
                                <b className="d-block">Domain</b>
                                lorem ipsum, or lipsum
                            </Label>
                            <Label className="mt-3">
                                <b className="d-block">Technology</b>
                                lorem ipsum, or lipsum
                            </Label>
                        </Col>
                    </Row>
                    <ModalFooter>
                        <Button color="info" className="lnew_btns" onClick={changeStatus}>Accept</Button>
                        <Button color="danger" className="lnew_btns" onClick={toggleNested}>Reject</Button>
                        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                            <ModalHeader>Reason for Rejection</ModalHeader>
                            <ModalBody>
                                <Input type="textarea" name="reject_reason"/>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                              <Button color="secondary" onClick={toggleAll}>All Done</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalFooter>
                </Container>
            </ModalBody>
        </Modal>
    </div>
 );
}
export default NewModal;