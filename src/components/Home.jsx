import React from "react";
import Button from 'react-bootstrap/Button';
import { Meetups } from './categories';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="categories">
            {/* adds buttons to be clicked to take you to a category */}
            <div class="button1" className='mb-1'>
                <Button variant="outline-dark" active href="./Meetups">
                  New Meetups
                </Button>
            </div>
            <div class="button2" className='mb-1'>
                <Button variant="outline-dark" active>
                  cat2
                </Button>
            </div>
            <div class="button3" className='mb-1'>
                <Button variant="outline-dark" active>
                  cat2
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;