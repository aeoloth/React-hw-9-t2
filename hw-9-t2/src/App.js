import React from "react";
import logo from "./logo.svg";
import Posts from "./Posts.js";
import Post from "./Post.js";
import data from "./data.js";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">My Posts</h2>
        </header>
        <section>
          <Switch>
            <Route path="/post/:id">
              <Post />
            </Route>
            <Route path="/">
              <Posts posts={data} />
            </Route>  
          </Switch>
          <Redirect from="/articles" to="/"/>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
