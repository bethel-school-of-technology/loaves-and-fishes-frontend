import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import { Meetups } from "./components/categories";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About /> } />
          <Route path="/contact" exact component={() => <Contact /> } />
          <Route path="/meetups" exact component={() => <Meetups /> } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
