import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import PageNotFound from "./components/PageNotFound";
import UserContext from "./Context/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import firebaseConfig from "./config/firebaseConfig";


firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="*" exact>
            <PageNotFound />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
