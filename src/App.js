import { useEffect } from "react";
import SignUpPage from "./Components/SignUp";
import { Switch, Route } from "react-router-dom";
import VerificationPage from "./Components/VerificationPage";
import { Fragment } from "react";
import ConfirmedVerificationPage from "./Components/ConfirmedVerification";
import SignInPage from "./Components/SignIn";
import ResetPasswordPage from "./Components/ResetPassword";
import AppBar from "./Components/AppBar";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";

function App() {
  useEffect(() => {
    document.title = "mustard";
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/verification">
          <VerificationPage />
        </Route>
        <Route path="/confirmedverification">
          <ConfirmedVerificationPage />
        </Route>
        <Route path="/sign">
          <SignInPage />
        </Route>
        <Route path="/reset">
          <ResetPasswordPage />
        </Route>
        <Route path="/appbar">
          <AppBar />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
