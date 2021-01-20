import React, { useState } from "react";
import axios from "axios";

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
          axios.post(`http://localhost:3000/needs`,  needs )
            .then(res => {
              console.log(res);
             // console.log(res.data);
            })
    }

    return (
        <div className="submitneed">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Submit Need</h1>

                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
                            </label>
                            <label>
                                Post Content:
            <input type="text" name="name" onChange={(e)=>setPostContent(e.target.value)} />
                            </label>
                            <label>
                                City:
            <input type="text" name="name" onChange={(e)=>setCity(e.target.value)} />
                            </label>
                            <label>
                                Category:
            <input type="text" name="name" onChange={(e)=>setCategory(e.target.value)} />
                            </label>
                            <label>
                                Amount:
            <input type="number" name="name" onChange={(e)=>setAmount(e.target.value)} />
                            </label>
                            <button type="submit">Add</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default SubmitNeed;