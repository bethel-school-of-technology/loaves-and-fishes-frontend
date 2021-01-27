import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Account, Login, Register } from "./components";
import { ViewNeeds, SubmitNeed } from "./components/categories";
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
          <Route path="/viewneeds" exact component={() => <ViewNeeds /> } />
          <Route path="/submitneed" exact component={() => <SubmitNeed /> } />
          <Route path="/account" exact component={() => <Account />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
