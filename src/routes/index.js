import React from 'react';

import MyRoute from './Route';

import { Switch } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SingUp from "../pages/SingUp"

import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile"

function Routes() {
  return (
    <Switch>
      <MyRoute path="/" exact component={SignIn}/>
      <MyRoute path="/register" component={SingUp}/>

      <MyRoute path="/dashboard" isPrivate component={Dashboard}/>
      <MyRoute path="/profile" isPrivate component={Profile}/>
    </Switch>
  );
}

export default Routes;