import * as React from "react";
import { NavLink } from 'react-router-dom';

import MVariablesForm from "./MVariableForm";
import MortgageChart from "./Mortgageform";


import mdefaultState from "./MdefaultState";


function MortgageCalc() {
  const [state, setState] = React.useState(mdefaultState);

  return (
    <div id="MortgageCalculator"><hr /><br />
        <NavLink to="/Home"><button onClick = "#Home" class = "button"> 
                Click to return to Home!</button></NavLink><br /><br />
        <NavLink to="/ClosedEnd"><button onClick = "#Home" class = "button"> 
                Click to go to Closed-End Loans!</button></NavLink>
        <NavLink to="/CreditCard"><button onClick = "#Home" class = "button"> 
                Click to Go to Credit Card Loans!</button></NavLink>
        <NavLink to="/DepositAccount"><button onClick = "#Home" class = "button"> 
                Click to go to Deposit Accounts!</button></NavLink><br /><br />
      <h1 className="text-center">Mortgage Loan Calculator</h1><br />
      <hr />
      <MVariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <MortgageChart {...state} />
    </div>
  );
}

export default MortgageCalc