import SignUpPage from "./Components/SignUp";
import { Switch, Route } from "react-router-dom";
import VerificationPage from "./Components/VerificationPage";
import { Fragment } from "react";
import ConfirmedVerificationPage from "./Components/ConfirmedVerification";
import SignInPage from "./Components/SignIn";
import ResetPasswordPage from "./Components/ResetPassword";
import AppBar from "./Components/AppBar";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
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
      </Switch>
    </Fragment>
  );
}

export default App;
