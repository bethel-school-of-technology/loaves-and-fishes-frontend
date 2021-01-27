import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import "./Stylesheets/Register.css";

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: null,
      firstName:'',
      lastName:'',
      username:'',
      password:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event, role) {
    var apiBaseUrl = "http://localhost:8080/api/user/register";
    // console.log("values in register handler",role);
   
    //To be done:check for empty values before hitting submit
    if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.username.length > 0 && this.state.password.length > 0) {
      var payload = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "username": this.state.username,
        "password": this.state.password,
      }
      var self = this;
      axios.post(apiBaseUrl, payload)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
              console.log("Register success");
              localStorage.setItem("loginToken", response.headers.authorization);
              self.setState({ redirect: "/login" });
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
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
   
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar showMenuIconButton={false}
             title="Register"
            />
            <div className="formInput">
            <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
            </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
