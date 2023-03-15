import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../Homepagestuff/Home.css"

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      uname:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { uname, password} = this.state;
    console.log(uname, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        uname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userRegister");
        if(data.status==="ok"){
          alert("login successful");
          window.localStorage.setItem("token",data.data);
          window.localStorage.setItem("loggedIn",true);

          window.location.href="./userDetails";

        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br /><br />
        <h2>Login</h2>

        <div>
          <label>Username: </label>
          <input
            class="box2"
            placeholder="Enter Username"
            onChange={(e) => this.setState({uname: e.target.value})}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            class="box2"
            placeholder="Enter password"
            onChange={(e) => this.setState({password: e.target.value})}
          />
        </div>

        <div>
          <div>
            <input
              type="checkbox"
              id="customCheck1"
            />
            <label>
              : Remember me?
            </label>
          </div>
        </div>

        <div>
          <button class="button" type="submit">
            Submit
          </button>
        </div>
        <div>
          Forgot your <NavLink to="https://tinyurl.com/4up77t8s">password?</NavLink>
        </div>
        <br />
        <div>
          Oops, you're here without an account. <NavLink to="/Register">
          Register Now!</NavLink>
        </div>
      </form>
    )
  }
}