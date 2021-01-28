import React from "react";
import Button from 'react-bootstrap/Button';
import background from "./Stylesheets/pic.png";
import "./Stylesheets/Register.css";

function Account() {
  if (localStorage.getItem("loginToken") === null) {
    return (
      <div>

        <img src={background} style={{ height: '50%', width: '65%', marginTop: '4vh' }} alt="" />
        <div class="button1" className='mr-1'>
          <Button style={{ marginRight: 8, marginTop: '3vh' }} variant="outline-dark" active href="./Register">
            Register
                        </Button>
          <Button style={{ marginTop: '3vh' }} variant="outline-dark" active href="./Login">
            Login
                         </Button>
        </div>

      </div>
    );
  } else {
    return (
      <div className="account">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h1 class="font-weight-light">Account</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;