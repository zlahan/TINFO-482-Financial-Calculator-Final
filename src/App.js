import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Homepagestuff/NavBar'
import NoMatch from './Components/Homepagestuff/NoMatch'

import Login from "./Components/LoginRegisterinfo/Login"
import Register from "./Components/LoginRegisterinfo/Register"
import Home from "./Components/Homepagestuff/Home"
import ClosedEnd from "./Components/Closedendinfo/Closedend"
import DepositAccount from "./Components/Depositinfo/DepositAccount"
import Creditcards from "./Components/Creditcardinfo/Credit"
import MortgageCalc from "./Components/Mortgageinfo/Mortgage";

import Footer from "./Components/Homepagestuff/Footer"
import Userdetails from "./Components/LoginRegisterinfo/Userdetails"

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={isLoggedIn=="true" ? <Userdetails /> : <Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ClosedEnd" element={<ClosedEnd />} />
        <Route path="/DepositAccount" element={<DepositAccount />} />
        <Route path="/CreditCard" element={<Creditcards />} />
        <Route path="/Mortgage" element={<MortgageCalc />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Userdetails" element={<Userdetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  <Footer />
    </>

  );
}

export default App;