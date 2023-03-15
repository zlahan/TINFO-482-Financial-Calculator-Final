import * as React from "react";
import { NavLink } from 'react-router-dom';
import VariablesForm from "./VariableForm";
import CompoundInterestChart from "./Depositaccountform";
import defaultState from "./defaultState";


function DepositAccount() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="annualCompoundCalculator"><hr /><br />
      <NavLink to="/Home"><button onClick = "#Home" class = "button"> 
                Click to return to Home!</button></NavLink><br /><br />
      <NavLink to="/ClosedEnd"><button onClick = "#Home" class = "button"> 
                Click to Go to Closed End Loans!</button></NavLink>
      <NavLink to="/CreditCard"><button onClick = "#Home" class = "button"> 
                Click to go to Credit Card Loans!</button></NavLink>
      <NavLink to="/Mortgage"><button onClick = "#Home" class = "button"> 
                Click to go to Mortgage Loans!</button></NavLink><br /><br />
      <h1 className="text-center">Certificate of Deposit (CD) Calculator</h1><br />
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <CompoundInterestChart {...state} />
    </div>
  );
}

export default DepositAccount