

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Links() {
  return (
    <Router>
      <div>
        <nav>
          <ul className = "main-nav">
            <li className = "main-li">
              <Link className ="main-li" to="/">Home</Link>
            </li>
            <li className = "main-li">
              <Link className ="main-li" to="/about">About</Link>
            </li>
            <li className = "main-li">
              <Link className ="main-li" to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Links
