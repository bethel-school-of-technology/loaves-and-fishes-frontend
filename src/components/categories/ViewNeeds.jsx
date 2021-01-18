import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//from material UI
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


// View A need post.
function ViewNeeds() {
    //added from material UI
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

//Axios - Gets need post from needs.json, hook up to back-end
    const [needs, setNeeds] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/needs")
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setNeeds(response.data);
                }
            })
    }, [])



    return (
        <div className="viewneeds">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light" >View Needs</h1>

                        <ul>
                            {
                                needs.map(need => {

                                    return (
                                        <Card className={classes.root} variant="outlined">
                                            <CardContent>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {need.name}
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    {need.postContent}
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    {need.category}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {need.city}
                                                    <br />
                                                    {'"Need Amount"'}
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    {need.amount}
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    )
                                })
                            }

                        </ul>


                    </div>
                </div>
            </div>
        </div>
    );
}


export default ViewNeeds;