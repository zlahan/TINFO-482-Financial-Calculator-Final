import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../Homepagestuff/Home.css"

export default class Register extends Component {
  constructor(props){
    super (props)
    this.state={
      fname:"",
      lname:"",
      email:"",
      uname:"",
      password:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {fname,lname, email,uname, password } = this.state;
    console.log(fname,lname,email,uname, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        uname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userRegister");
        if(data.status=="Succeessful"){
          alert("Your account has been created please login!");
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br /><br />
        <h2>Register</h2>

        <div>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e)=>this.setState({ fname: e.target.value})}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e)=>this.setState({ lname: e.target.value})}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e)=>this.setState({ email: e.target.value})}
          />
        </div>

        <div>
          <label>Username: </label>
          <input type="text" placeholder="Enter Username" 
          onChange={(e)=>this.setState({ uname: e.target.value})}
          />

        </div>


        <div>
          <label>Password: </label>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(e)=>this.setState({ password: e.target.value})}
          />
        </div>

        <div>
          {/* <NavLink to="/login"> */}
            <button class="button" type="submit">
            Register Now
          </button>
          {/* </NavLink> */}
        </div>
        <div>
          Already registered? <NavLink to="/Login">Log in!</NavLink>
        </div>
        <br />
      </form>
    )
  }
}