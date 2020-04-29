import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Category from "./components/Category";
import Login from "./components/Login";
import Products from "./components/Products";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";
import NavbarMenu from "./components/Navbar/NavbarMenu";
function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            exact
            // authed={fakeAuth.isAuthenticated}
            path="/admin"
            component={Admin}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
