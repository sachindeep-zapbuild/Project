import React from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap';
import ModalConductor from './ModalConductor';
import axios from 'axios';


class LeadBoard extends React.Component {    
    state={
        leads:[],
        activelead:[],
        }; 
	componentDidMount() {
        axios.get('http://127.0.0.1:8000/leads/partial/')
        .then(res=>{
            console.log("response",res);
            this.setState({leads: res.data});  
        })
        .catch(err =>{
            console.log(err);
            alert("error");
        })  
	  } 
    callApi=()=>{
        alert('api called');
        // axios.get('http://127.0.0.1:8000/leads/Leads/') //pass all data to modal as prop newlead=[complead]
        // .then(response=>{
        //     console.log("response lead",response);
        // })
        // .catch(error=>{
        //     console.log(error);
        //     alert('error onclick api');
        // })
    }    
    render(){
        return (
            <Container fluid={true} className="cont_lead mt-5">
                <Row>
                    <Col className="Sidebar" sm="1">
                        For Sidebar
                    </Col>
                    <Col sm="11">
                        <Container className="List-container">
                            <h2>Lead Dashboard </h2>
                            <Row>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">
                                            <ListGroupItemHeading >
                                                New
                                            </ListGroupItemHeading>
                                        </ListGroupItem>
                                        {
                                            this.state.leads.map((data,index) =>{
                                                if (data.status === "new") {
                                                    return(
                                                        <ListGroupItem key={index} onClick={this.callApi}>
                                                            <ModalConductor status={data.status} labelname={data.title}/>
                                                        </ListGroupItem>
                                                    );
                                                }
                                            })
                                        }
                                    </ListGroup>
                                </Col>

                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">
                                            <ListGroupItemHeading >
                                                Accepted
                                            </ListGroupItemHeading>
                                        </ListGroupItem>
                                        {
                                            this.state.leads.map((data,index) =>{
                                                if (data.status === "accepted") {
                                                    return(
                                                        <ListGroupItem key={index} action>
                                                            <ModalConductor status={data.status} labelname={data.title}/>
                                                        </ListGroupItem>
                                                    );
                                                }
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading > 
                                                Pitched
                                            </ListGroupItemHeading>
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            kk
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Pitched' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Pitched' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='Pitched' labelText="Marketplace" />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col sm="3">
                                    <ListGroup className="Lead-dashboard-list">
                                        <ListGroupItem color="info">

                                            <ListGroupItemHeading >
                                                Response Generated
                            </ListGroupItemHeading>   </ListGroupItem>
                                        <ListGroupItem action>
                                            <ModalConductor status='ResponseGenerated' labelText="LMS System" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='ResponseGenerated' labelText="E-Learning App" />
                                        </ListGroupItem>

                                        <ListGroupItem action>
                                            <ModalConductor status='ResponseGenerated' labelText="Marketplace" />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default LeadBoard;
