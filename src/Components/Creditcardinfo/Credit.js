import * as React from "react";
import { NavLink } from 'react-router-dom';

import VariablesForm from "./VariableForm";
import CreditcardChart from "./CreditcardForm";
import defaultState from "./defaultState";

function Creditcards() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="annualCompoundCalculator"><hr /><br />
        <NavLink to="/Home"><button onClick = "#Home" class = "button"> 
                Click to return to Home!</button></NavLink><br /><br />
        <NavLink to="/ClosedEnd"><button onClick = "#Home" class = "button"> 
                Click to Go to Closed End Loans!</button></NavLink>
        <NavLink to="/DepositAccount"><button onClick = "#Home" class = "button"> 
                Click to go to Deposit Accounts!</button></NavLink>
        <NavLink to="/Mortgage"><button onClick = "#Home" class = "button"> 
                Click to go to Mortgage Loans!</button></NavLink><br /><br />
      <h1 className="text-center">Credit Card Loan Calculator</h1><br />
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <CreditcardChart {...state} />
    </div>
  );
}

export default Creditcards