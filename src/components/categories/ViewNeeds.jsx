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
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';



  
  // for search autocomplete: Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
//   const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     { title: 'The Godfather: Part II', year: 1974 },
//     { title: 'The Dark Knight', year: 2008 },
//     { title: '12 Angry Men', year: 1957 },
//     { title: 'Toy Story', year: 1995 },
//     { title: 'Bicycle Thieves', year: 1948 },
//     { title: 'The Kid', year: 1921 },
//     { title: 'Inglourious Basterds', year: 2009 },
//     { title: 'Snatch', year: 2000 },
//     { title: '3 Idiots', year: 2009 },
//     { title: 'Monty Python and the Holy Grail', year: 1975 },
//   ];
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



  /*   <div style={{ width: 300 }}>
    
      Search bar with autocomplete to search by category <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      /
    </div> */


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



    //:mailto
   // const Mailto = ({ email, subject = '', body = '', children }) => {
  //      let params = subject || body ? '?' : '';
   //     if (subject) params += `subject=${encodeURIComponent(subject)}`;
  //      if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  //      return <a href={`mailto:${email}${params}`}>{children}</a>;
 //   };
    //

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
        <IconButton  aria-label="add to favorites">
       
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


export default ViewNeeds;