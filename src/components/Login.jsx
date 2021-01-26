import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import "./Stylesheets/Register.css";


var apiBaseUrl = "http://localhost:8080/login";


class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider>
        <div className="field">
          <div className="formInput">
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            <RaisedButton label="Get" primary={true} style={style} onClick={(event) => this.handleGet(event)} />

          </div>
        </div>
      </MuiThemeProvider>
    )
    this.state = {
      username: '',
      password: '',
      loginComponent: localloginComponent,
    }
  }

  handleGet() {


  }

  handleClick(event) {
    var payload = {
      "username": this.state.username,
      "password": this.state.password
    }



    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.data === "good") {
          console.log("Login successfull");

        }
        else if (response.status === 200) {
          if (response.headers.authorization) {
            console.log("login success");
            localStorage.setItem("loginToken", response.headers.authorization);
          } else { 
            console.log("Username password do not match");
            alert(response.data.success)
          }
        }
        else {
          console.log("Error logging in");
          alert("Error logging in");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }




  render() {
    return (
      <div>
        <MuiThemeProvider className="field">
          <AppBar showMenuIconButton={false}
            title="Login"
          />
        </MuiThemeProvider>

        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
