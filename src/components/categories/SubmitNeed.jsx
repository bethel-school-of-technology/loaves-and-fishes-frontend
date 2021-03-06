import React, { useState } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

// Submit A need forum post.
function SubmitNeed() {
    const [name, setName] = useState("")
    const [postContent, setPostContent] = useState("")
    const [city, setCity] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const needs = {
            name,
            postContent,
            city,
            category,
            amount
        };
        console.log(needs)
        //linking axios to back end using json as temp.
        axios.post(`http://localhost:3000/needs`, needs)
            .then(res => {
                console.log(res);
                // console.log(res.data);
            })

            
    }
    

    return (

        <div className="submitneed"  >
            <div class="container" >
                {/* added axios styling */}
                <div class="row align-items-center my-4" style={{ display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light mb-4" style={{ display: 'flex', justifyContent: 'center', margin: 'auto'}}>Submit Need</h1>

                        <form  onSubmit={handleSubmit} style={{ display: 'grid', justifyContent: 'center', margin: 'auto'}}>
                            <label>
            <TextField type="text" name="name" onChange={(e) => setName(e.target.value)} 
                                                id="outlined-text"
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
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
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
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
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
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
                                                style={{display:"flex", flexDirection:"row", justifyContent: 'center', margin: 3 }}
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
            <TextField inputProps={{className: 'digitsOnly' }}  name="amount" onChange={(e) => setAmount(e.target.value)} 
                                                id="outlined-number"
                                                label="Amount"
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
                            disableElevation display="inline"  onClick={event => window.location.href='/viewneeds'}>Add</Button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );

}


export default SubmitNeed;
