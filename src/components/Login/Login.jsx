import "./Login.css";
import React, { useContext } from "react";

import firebase from "firebase";
import firebaseConfig from "./../../config/firebase.config";
import { UserContent } from './../../App';
import { useHistory, useLocation } from "react-router";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {

  const  [loggedInUser, setLoggedInUser] = useContext(UserContent)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedInUser({email: user.email})
        history.replace(from)
        // console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <form onSubmit={onSubmitHandler} className="border p-3 shadow">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Type your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Type your password"
                />
              </div>
              <input type="submit" value="Login" className="btn btn-danger" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
