import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

function App(props) {
  console.log(props);
  const onAuthRequired = () => {
    props.history.push("/login");
  };

  return (
    <Security
      issuer="https://dev-623026.okta.com/oauth2/default"
      clientId="0oaqa0rrjKYjsMLRL4x6"
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
    >
      <div>
        <Navbar />
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <SecureRoute exact={true} path="/staff" component={Staff} />
          <Route
            path="/login"
            render={() => (
              <Login baseUrl="https://dev-623026.okta.com/oauth2/default" />
            )}
          />
          <Route path="/implicit/callback" component={LoginCallback} />
        </div>
      </div>
    </Security>
  );
}

export default withRouter(App);
