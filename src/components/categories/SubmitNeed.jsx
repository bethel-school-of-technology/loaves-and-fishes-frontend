import React, { useState } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import background from "../Stylesheets/pic.png";
import "../Stylesheets/Register.css";
// Submit A need forum post.
function SubmitNeed() {
    
    const [name, setName] = useState("")
    const [postContent, setPostContent] = useState("")
    const [city, setCity] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const token = { headers: { Authorization: localStorage.getItem('loginToken') } };
    const postApi = "http://localhost:8080/needposts";


    const handleSubmit = (e) => {
        e.preventDefault();
        const needs = {
            name,
            postContent,
            city,
            category,
            amount,
            email,
            phoneNumber
        };
        console.log(needs)
        //linking axios to back end using json as temp.
        axios.post(postApi, token, needs)
            .then(res => {
                console.log(res);
                // console.log(res.data);
            })

            
    }
    
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

            <div className="submitneed"  >
                <div class="container" >
                    {/* added axios styling */}
                    <div class="row align-items-center my-4" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light mb-4" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>Submit Need</h1>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', justifyContent: 'center', margin: 'auto' }}>
                                <label>
                                    <TextField type="text" name="name" onChange={(e) => setName(e.target.value)}
                                        id="outlined-text"
                                        style={{ display: "flex", flexDirection: "row", justifyContent: 'center', margin: 3 }}
                                        label="Name"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        multiline
                                        size="small"
                                        variant="outlined"
                                        display="inline"
                                    />
                                </label>
                                <label>
                                    <TextField type="text" name="postContent" onChange={(e) => setPostContent(e.target.value)}
                                        id="outlined-text"
                                        style={{ display: "flex", flexDirection: "row", justifyContent: 'center', margin: 3 }}
                                        label="Post Content"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        multiline
                                        size="small"
                                        variant="outlined"
                                        display="inline"
                                    />
                                </label>
                                <label>
                                    <TextField type="text" name="city" onChange={(e) => setCity(e.target.value)}
                                        id="outlined-text"
                                        style={{ display: "flex", flexDirection: "row", justifyContent: 'center', margin: 3 }}
                                        label="City"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        multiline
                                        size="small"
                                        variant="outlined"
                                        display="inline"
                                    />
                                </label>
                                <label>
                                    <TextField type="text" name="category" onChange={(e) => setCategory(e.target.value)}
                                        id="outlined-text"
                                        style={{ display: "flex", flexDirection: "row", justifyContent: 'center', margin: 3 }}
                                        label="Category"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        multiline
                                        size="small"
                                        variant="outlined"
                                        display="inline"
                                    />
                                </label>
                                <label>
                                    <TextField inputProps={{ className: 'digitsOnly' }} name="amount" onChange={(e) => setAmount(e.target.value)}
                                        id="outlined-number"
                                        label="Amount"
                                        style={{ display: "flex", flexDirection: "row", justifyContent: 'center', margin: 3 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        display="inline"
                                        size="small"
                                        type="number"
                                                

                                                />
                            </label>
                            <label>
            <TextField type="text" name="email" onChange={(e) => setEmail(e.target.value)} 
                                                id="outlined-text"
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
                                                label="Email"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                multiline
                                                size="small"
                                                variant="outlined" 
                                                display="inline"
                                                />
                            </label>
                            <label>                         
            <TextField inputProps={{className: 'digitsOnly' }}  name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} 
                                                id="outlined-number"
                                                label="Phone Number"
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="outlined"
                                                display="inline"
                                                size="small"
                                                type="number"
                                                
                                                />
                            </label>
                            

                            {/* button to submit and redirect to viewneeds */}
                            <Button id="submitButton" type="submit" variant="outlined" color="primary" size="small"
                            style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }} display="flex"
                            disableElevation display="inline"  
                            // onClick={event => window.location.href='/viewneeds'}
                            >Add</Button>
                        </form>
                        
                        </div>
                    </div>
                </div>
            </div>
        
        );

    }
}


export default SubmitNeed;
