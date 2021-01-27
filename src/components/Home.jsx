import React from "react";
import Button from 'react-bootstrap/Button';



function Home() {
  if (localStorage.getItem("loginToken") === null) {
    return (
      <div>
      <h1>This is where welcome info should go.</h1>
        <div class="button1" className='mr-1'>
          <Button style={{ marginRight: 8 }} variant="outline-dark" active href="./Register">
            Register
                        </Button>
              <Button variant="outline-dark" active href="./Login">
             Login
                         </Button>
      </div>
    </div>
    );
  } else {
    return (
      <div className="home" >
        <div class="container">

          <div className="hometext" >
            <div class="col-lg-5" style={{ display: 'grid', justifyContent: 'center', margin: 'auto' }}>
              <h1 class="font-weight-light">Home</h1>
              <p style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                Help meet a need.
            </p>
            </div>
          </div>

          {/* Seperated out the hometext and categories for css styling  */}

          <div class="categories" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
            {/* adds buttons to be clicked to take you to a category */}
            <div class="button1" className='mr-1'>
              <Button variant="outline-dark" active href="./ViewNeeds">
                View Needs
                </Button>
            </div>

            <div class="button2" className='mb-1'>
              <Button variant="outline-dark" active href="./SubmitNeed">
                Submit Need
                </Button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;