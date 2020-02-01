import React from "react";

import { Route, Switch } from "react-router-dom";
import Phones from "./containers/phones";
import Phone from "./containers/phone";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Phones} />
      <Route path="/phones/:id" component={Phone} />
    </Switch>
  );
};
