import React, { Component } from 'react';
import axios from 'axios'
import { Container, Row , Col } from 'reactstrap';
import { Button, Label, Input, FormGroup,Form} from 'reactstrap';


class NewLead extends Component {
    constructor(props){
        super(props)
        this.state={
            "comment": {
                "cmnt": ""
            },
            "title": "",
            "source": "",
            "description": "",
            "url": "",
            "domain": "",
            "keyword": "",
            "attachment": "",
            "technology": "",
            "estimated_budget": null,
            "referredby": "",
            "assignto": "",
            "fullname": "",
            "email": "",
            "company": "",
            "designation": "",
            "skypeid": "",
            "address": "",
            "city": "",
            "state": "",
            "country": "",
            "phone": ""
        }
        this.baseState=this.state;
    }
    changeHandler = (e) =>{
        // const { prospect } = { ...this.state };
        // const currentState = prospect;
        // const { name, value } = e.target;
        // currentState[name] = value;

        // this.setState({ prospect: currentState });
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:8000/leads/Leads/', this.state)
    		.then(response => {
    			console.log(response);
                alert("information posted");
    		})
    		.catch(error => {
    			console.log(error);
                alert("error");
    		})
	}
    cancelHandler = () => {
        this.setState(this.baseState);
        this.setState({estimated_budget:''});
    }
    submitNewHandler = () =>{
        console.log("submit and new");
    }
    existHandler = (e) => {
        console.log("Existing");
    }
    
    render(){
        const {title,source,description,url,domain,keyword,attachment,technology,estimated_budget,referredby,assignto,fullname,email,company,designation,skypeid,address,city,state,country,phone,}=this.state
    return ( 
      <div>
        <Form onSubmit={this.submitHandler} id="myForm">
            <Container className="my-5 px-5 py-4 border border-secondary bg-light">
                <Row className="mt-2">
                    <Col>
                        <h2>New Lead</h2>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col sm="7">
                        <Label>Title*</Label>
                        <Input placeholder="Title" name="title" value={title} onChange={this.changeHandler} required/>
                        <Label className="mt-2">Description</Label>
                        <Input type="textarea" rows="8" name="description" value={description} onChange={this.changeHandler} required/>
                    </Col> 
                    <Col sm="5">
                        <Label>Source</Label>
                        <Input type="select"  name="source" value={source} onChange={this.changeHandler}>
                            <option>choose</option>
                            <option>1</option>
                            <option>2</option>
                        </Input>
                        <Label className="mt-2">URL</Label>
                        <Input placeholder="URL" name="url" value={url} onChange={this.changeHandler} required/>
                        <Label className="mt-2">Domain</Label>
                        <Input type="select" name="domain" value={domain} onChange={this.changeHandler}>
                            <option>choose</option>
                            <option>1</option> 
                            <option>2</option>
                        </Input> 
                        <Label className="mt-2">Keywords / Tags</Label>
                        <Input placeholder="Keywords or Tags"name="keyword" value={keyword} onChange={this.changeHandler} required/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm="7" className="mt-2">
                        <Row>
                            <Col>
                                <Label>Attachment</Label><br/>
                            </Col>
                            <Col>
                                <Label className="btn btn-primary px-4" for="addfile">Add</Label>
                                <Input type="file" id="addfile" className="d-none" name="attachment" value={attachment} onChange={this.changeHandler}/>
                            </Col>
                        </Row> 
                        <Row className="mt-2">
                            <Col>
                                <Label>Estimated Budget ($)</Label>
                            </Col>
                            <Col>
                                <Input placeholder="Budget" name="estimated_budget" value={estimated_budget} onChange={this.changeHandler} required/>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Label>Referred By</Label>
                            </Col>
                            <Col>
                                <Input placeholder="Referred By" name="referredby" value={referredby} onChange={this.changeHandler} required/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="5" className="mt-2">
                        <Label>Technology</Label>
                        <Input type="select" name="technology"value={technology} onChange={this.changeHandler}>
                            <option>choose</option>
                            <option>1</option>
                            <option>2</option>
                        </Input>
                        <Row className="mt-2">
                            <Col>
                                <Label>Assignee*</Label><br/>
                                <Label className="ml-3">
                                    <Input type="radio" name="radio1"/>Assign to
                                </Label>
                            </Col>
                            <Col className="mt-3">
                                <Input type="select" name="assignto"value={assignto} onChange={this.changeHandler}>
                                    <option>choose</option>
                                    <option>1</option>
                                    <option>2</option>
                                </Input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="mt-5"/>
                <FormGroup tag="fieldset">
                    <Row className="mt-4">
                        <Col xs="5">
                            <legend>Prospect Details</legend>
                        </Col>
                        <Col xs="3">
                            <p onClick={this.existHandler}>Existing?</p>
                        </Col><Col sm="6"></Col>
                    </Row>
                    <Row className="mt-2 ml-3">
                        <Col sm="6">
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Full Name</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Full Name" name="fullname" value={fullname} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Email</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Email"name="email" value={email} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1">+</Col>
                            </Row>      
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Company</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Company" name="company"value={company} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Designation</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Designation" name="designation" value={designation} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Skype ID</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Skype ID" name="skypeid" value={skypeid} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>                   
                        </Col>
                        <Col sm="6">
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Street Address</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Street Address"name="address" value={address} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>City</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="City" name="city" value={city} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>State</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="State"name="state" value={state} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Country</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Country" name="country"value={country} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Phone Number</Label>
                                </Col>
                                <Col sm="6">
                                    <Input placeholder="Phone Number" name="phone" value={phone} onChange={this.changeHandler} required/>
                                </Col>
                                <Col sm="1">+</Col>
                            </Row>
                        </Col>
                    </Row>                    
                </FormGroup>            
                <Row>
                    <Col sm="2" className="mt-2">
                        <Button type="submit" color="success" block>Submit</Button>
                    </Col>
                    <Col sm="2" className="mt-2">
                        <Button type="submit" color="primary" block onClick={this.submitNewHandler}>Submit and New</Button>
                    </Col>
                    <Col sm="2" className="mt-2">
                        <Button color="danger" block onClick={this.cancelHandler}>Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    </div> 
    );
  }
}
export default NewLead