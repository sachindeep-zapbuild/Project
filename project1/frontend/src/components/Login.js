import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Label, Input, Form } from 'reactstrap';
import history from './../routes/history';

class Login extends Component {
	constructor(props){
		super(props)
		this.state={
		   username:'',
		   password:'',
	 	};
	 	this.initialState=this.state;
  	}
  
  	changeHandler = (e) =>{
      this.setState({[e.target.name]:e.target.value})
   	}
  	submitHandler = (e) =>{
		// alert('A name was submitted: ' + this.state.username +'password: ' + this.state.password);
		e.preventDefault();
		var field_user=this.state.username;
		var field_password=this.state.password;
		console.log(field_user);
		console.log(field_password);

        this.setState(this.initialState);
  	}
	render(){
		return(
			<Form onSubmit={this.submitHandler}>
      		<Container className="cont1">
      			<Row>
      				<Col>
      					<h1 className="Ltext mb-4">Sign In</h1>
      				</Col>
      			</Row>
      			<Row>
      				<Col sm="4"></Col>
      				<Col sm="4" className="Uptext border border-secondary bg-light text-left p-4">
		             	<Label>Username</Label>
		             	<Input placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler}/>
		             	<Label className="mt-4">Password</Label>
		             	<Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler}/>
		             	<Button className="mt-4" block color="success" onClick={() => history.push('/dashboard')}>Log In</Button>
		          	</Col>
		          	<Col sm="4"></Col>
      			</Row>
      		</Container>
      	</Form>
		);
	}
}
export default Login;