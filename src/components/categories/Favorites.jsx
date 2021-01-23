// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';



// //from material UI
// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });


// // View A need post.
// function Favorites() {
//     //added from material UI
//     const classes = useStyles();
//     const bull = <span className={classes.bullet}>•</span>;

//     //Axios - Gets need post from favorites.json, hook up to back-end
//     const [favorites, setFavorites] = useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:3000/favorites")
//             .then(response => {
//                 console.log(response);
//                 if (response.status === 200) {
//                     setFavorites(response.data);
//                 }
//             })
//     }, [])


//     return (
//         <div className="favorites">
//             <div class="container">
//                 <div class="row align-items-center my-5">
//                     <div class="col-lg-5">
//                         <h1 class="font-weight-light" >Favorites</h1>

//                         <ul>
//                             {
//                                 Favorites.map(favorites => {

//                                     return (
//                                         <Card className={classes.root} variant="outlined">
//                                             <CardContent>
//                                                 <Typography className={classes.title} color="textSecondary" gutterBottom>
//                                                     {need.name}
//                                                 </Typography>
//                                                 <Typography variant="h5" component="h2">
//                                                     {need.category}
//                                                 </Typography>

//                                                 <Typography className={classes.pos} color="textSecondary">
//                                                     {'Description:'}
//                                                     <br />
//                                                     {need.postContent}

//                                                 </Typography>

//                                                 <Typography variant="body2" component="p">

//                                                     {'Location:'}
//                                                     <br />
//                                                     {need.city}

//                                                 </Typography>
//                                                 <br />
//                                                 <Typography className={classes.pos} color="textSecondary">

//                                                     {'Need Amount:'}
//                                                     <br />
//                                                     {need.amount}
//                                                 </Typography>

//                                                 <CardActions>
//                                                     <Button onClick={() => { alert("Name: " + need.name + "  Email: " + need.email + " Phone: " + need.phoneNumber) }}>Help Meet This Need</Button>


//                                                 </CardActions>

                                            
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites"onChange={(e)=>setFavorites(e.target.value)}>
//           <FavoriteIcon />
//         </IconButton>
//         </CardActions>
//                                             </CardContent>
//                                         </Card>

//                                     )
//                                 })
//                             }

//                         </ul>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }


// export default Favorites;