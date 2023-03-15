import React from 'react';
import './Home.css';


import { NavLink } from 'react-router-dom';

const Home = () => {
      return (
          <div>
          {/* The section below is for the body of the homepage */}
            <body >
              <br />
              <h1>Welcome to the Financial Calculator!</h1>
              <br />
              <h2>This program will be used to calculate loans, CDs, Credit Cards, and Mortgages</h2>
              <h2>You will also get a visual representation of how your finances will look over a period</h2>
              <br />
              <h2>Below, you will see boxes for Closed End, Credit Card, Deposit Account, Mortgage calculators</h2>
              <br />
              <h2>Clicking each of the links will open the respective calculator</h2>
              <br />
              <h2>This program is a work-in-progress, and lots of styling and functionalities</h2>
              <h2>are subject to change at any time. Thank you!</h2>
              <br />
            
              <nav> 
                <div className= "rectangle">
                <br />
                <h1>Closed-End Loans</h1>
                <br />
                <h2>This box is for Closed-End Loans, click the</h2>
                <h2>button below to open the calculator.</h2>
                <br /><br />
                <NavLink to="/ClosedEnd"><button onClick = "#Closedend" class = "button"> 
                Click here for the Closed-End Loan Calculator</button></NavLink>
                </div>

                <div className= "rectangle">
                <br />
                <h1>Credit Card</h1>
                <br />
                <h2>This box is for Credit Cards, click the</h2>
                <h2>button below to open the calculator.</h2>
                <br /><br />
                <NavLink to="/CreditCard"><button onClick = "#Creditcard" class = "button"> 
                Click here for the Credit Card Calculator</button></NavLink>
                </div>
              </nav>

              <nav> 
                <div className= "rectangle">
                <br />
                <h1>Deposit Account</h1>
                <br />
                <h2>This box is for Deposit Accounts, click the</h2>
                <h2>button below to open the calculator.</h2>
                <br /><br />
                <NavLink to="/DepositAccount"><button onClick = "#Depositaccount" class = "button"> 
                Click here for the Deposit Account Calculator</button></NavLink>
                </div>
                
                <div className= "rectangle">
                <br />
                <h1>Mortgage Loan</h1>
                <br />
                <h2>This box is for Mortgages, click the</h2>
                <h2>button below to open the calculator.</h2>
                <br /><br />
                <NavLink to="/Mortgage"><button onClick = "#Mortgage" class = "button"> 
                Click here for the Mortgage Loan calculator.</button></NavLink>
                </div>
              </nav>
          
            </body> 

          </div>
    );
  }

  export default Home;