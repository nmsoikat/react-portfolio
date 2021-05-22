import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PrivateRoute from "./components/Login/PrivateRoute";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import AddProject from "./components/Admin/AddProject/AddProject";
import ManageBlog from "./components/Admin/ManageBlog/ManageBlog";
import ManageProject from "./components/Admin/ManageProject/ManageProject";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";

export const UserContent = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ email: "" });

  return (
    <UserContent.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/projects/:category">
            <Projects />
          </Route>

          <PrivateRoute exact path="/admin/addBlog/">
            <AddBlog />
          </PrivateRoute>
          <PrivateRoute path="/admin/addBlog/:id">
            <AddBlog />
          </PrivateRoute>
          <PrivateRoute path="/admin/blogs">
            <ManageBlog />
          </PrivateRoute>

          <PrivateRoute exact path="/admin/addProject">
            <AddProject />
          </PrivateRoute>
          <PrivateRoute path="/admin/addProject/:id">
            <AddProject />
          </PrivateRoute>
          <PrivateRoute path="/admin/projects/">
            <ManageProject />
          </PrivateRoute>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContent.Provider>
  );
}

export default App;
