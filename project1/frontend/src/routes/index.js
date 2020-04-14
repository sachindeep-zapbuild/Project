
import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../components/Login';
import Leadboard from '../components/Modals/Lead_Dashboard';


import NewLead from '../components/NewLeadForm';

const Routes = () =>{
    return (
        <Switch>
        	<Route path="/" exact component={Login} />
        	<Route path="/dashboard" component={Leadboard} />
        	<Route path="/newleadform" component={NewLead} />

        </Switch>    
    )
}

export default Routes
