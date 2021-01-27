import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

//from material UI


// Add Post to Favorites.
//function addToFavorites() {
//   const [favorites, setFavorites] = useState("")

//  const handleSubmit = (e) => {
//      e.preventDefault();
//       const favorites = {
//           favorites
//      };
//         console.log(favorites)
//linking axios to back end using json as temp.
//        axios.post(`http://localhost:3000/favorites`,  favorites )
//        .then(res => {
//           console.log(res);
// console.log(res.data);
//          })
//   }



//from material UI for cards

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
    const token = { headers: { Authorization: localStorage.getItem('loginToken') } };
    const postApi = "http://localhost:8080/needposts";

    //Axios - Gets need post from needs.json, hook up to back-end
    const [needs, setNeeds] = useState([]);
    const [needFavorite, setNeedFavorite] = useState([])

    useEffect(() => {
        axios.get(postApi, token)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setNeeds(response.data);
                    let temporary = []
                    needs.forEach(need => {
                        temporary.push(false)

                    })
                    setNeedFavorite(temporary)
                    // localStorage.setItem("favorites", JSON.stringify([]))
                }
            })
    }, [])

    const addFavorites = (e, need) => {
        console.log(need)
        let favoriteNeedIndex = needs.map(n => { return n.name }).indexOf(need.name);
        console.log(needFavorite[favoriteNeedIndex]);
        if (needFavorite[favoriteNeedIndex] === false) {
            needFavorite[favoriteNeedIndex] = true;
            if (localStorage.getItem("favorites")) {
                let currentNeeds = JSON.parse(localStorage.getItem("favorites"))
                console.log(currentNeeds)
                currentNeeds.push(need);
                localStorage.setItem("favorites", JSON.stringify(currentNeeds))

            } else {
                let temp = []
                temp.push(need);
                localStorage.setItem("favorites", JSON.stringify(temp))
            }
        }
    }


    //:mailto
    // const Mailto = ({ email, subject = '', body = '', children }) => {
    //      let params = subject || body ? '?' : '';
    //     if (subject) params += `subject=${encodeURIComponent(subject)}`;
    //      if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    //      return <a href={`mailto:${email}${params}`}>{children}</a>;
    //   };
    //
    if (localStorage.getItem("loginToken") === null) {
        return (<div><h1>Sorry You must be Logged in.</h1>
            <div class="button1" className='mr-1'>
                <Button variant="outline-dark" active href="./Login">
                    Login
                </Button>
            </div>
        </div>
        );
    } else {
        return (
            <div className="viewneeds">
                <div class="container">
                    <div class="row align-items-center my-4" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                        <div class="col-lg-5">


                            <h1 class="font-weight-light" style={{ display: 'flex', justifyContent: 'center', margin: 5 }}>View Needs</h1>

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
                                                        {need.category}
                                                    </Typography>

                                                    <Typography className={classes.pos} color="textSecondary">
                                                        {'Description:'}
                                                        <br />
                                                        {need.postContent}

                                                    </Typography>

                                                    <Typography variant="body2" component="p">

                                                        {'Location:'}
                                                        <br />
                                                        {need.city}

                                                    </Typography>
                                                    <br />
                                                    <Typography className={classes.pos} color="textSecondary">

                                                        {'Need Amount:'}
                                                        <br />
                                                        {need.amount}
                                                    </Typography>

                                                    <CardActions>
                                                        <Button onClick={() => { alert("Name: " + need.name + "  Email: " + need.email + " Phone: " + need.phoneNumber) }}>Help Meet This Need</Button>


                                                    </CardActions>





                                                    <CardActions disableSpacing>
                                                        <IconButton aria-label="add to favorites" onClick={(e) => addFavorites(e, need)}>

                                                            <FavoriteIcon />
                                                        </IconButton>
                                                    </CardActions>
                                                </CardContent>
                                            </Card>
                                            //onChange={(e)=>setFavorites(e.target.value)}
                                            //onSubmit={handleSubmit}
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
}


export default ViewNeeds;