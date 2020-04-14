import React, { Component } from 'react'; 
import './App.css';
// import Dy from './components/Dy';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './routes/history';

class App extends Component{  
  render(){
    return(
      <div className="App" >
      {/*<Lead_Dashboard/>
      
      <NewLead/>
      <LeadBoard/>
      <Register_User> 
      <Login/>*/}
      
     { /* <Dy/>*/}

      <Router history={history}>
        <Routes/>
      </Router>
        
       </div>
    ); 
  }
}

export default App;
