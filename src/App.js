import React from "react";

import AuthSystemWrapp from "./pages/AuthSystem/index";
import SignIn from "./pages/AuthSystem/SignIn/index";
import SignUp from "./pages/AuthSystem/SignUp/index";

import * as path from "constants/routes";

import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const APP_ROUTES = [
    { id: "1", path: "/", component: AuthSystemWrapp },
    { id: "2", path: path.SIGN_UP, component: SignUp },
    { id: "3", path: path.SIGN_IN, component: SignIn },
    // { id: "4", path: path.FORGOT_PASSWORD, component: ForgotPassword },
    // { id: "5", path: path.SUCCESS, component: Success },
    // { id: "6", path: path.VERIFICATION, component: Verification },
  ];

  return (
    <Switch>
      {APP_ROUTES.map((route) => (
        <Route
          exact
          key={route.id}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default App;
