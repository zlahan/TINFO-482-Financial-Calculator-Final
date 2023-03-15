import * as React from "react";
import { NavLink } from 'react-router-dom';

import VariablesForm from "./VariableForm";
import ClosedEndChart from "./Closedendform";
import defaultState from "./defaultState";

function ClosedEnd() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="closedEndCalculator"><hr /><br />
        <NavLink to="/Home"><button onClick = "#Home" class = "button"> 
                Click to return to Home!</button></NavLink><br /><br />
        <NavLink to="/CreditCard"><button onClick = "#Home" class = "button"> 
                Click to Go to Credit Card Loans!</button></NavLink>
        <NavLink to="/DepositAccount"><button onClick = "#Home" class = "button"> 
                Click to go to Deposit Accounts!</button></NavLink>
        <NavLink to="/Mortgage"><button onClick = "#Home" class = "button"> 
                Click to go to Mortgage Loans!</button></NavLink><br /><br />
      <h1 className="text-center">Closed-End Loan Calculator</h1><br />
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <ClosedEndChart {...state} />
    </div>
  );
}

export default ClosedEnd;