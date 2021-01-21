import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import "./Stylesheets/Register.css";


var apiBaseUrl = "http://localhost:8080";


class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider>
        <div className="field">
          <div className="formInput">
          <TextField
           hintText="Enter your Email"
           floatingLabelText="Email"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      loginComponent:localloginComponent,
    }
  }
 
 handleClick(event){
    var payload={
      "username":this.state.username,
	    "password":this.state.password
   }

   if (/\S+@\S+\.\S+/i.test(payload.username)) {

     axios.post(apiBaseUrl, payload)
       .then(function (response) {
         console.log(response);
         if (response.data === "good") {
           console.log("Login successfull");

         }
         else if (response.data.code === 204) {
           console.log("Username password do not match");
           alert(response.data.success)
         }
         else {
           console.log("Username does not exists");
           alert("Username does not exist");
         }
       })
       .catch(function (error) {
         console.log(error);
       });
   }
   else { alert("Improper Email Address"); }
  
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
