import React from "react";
import { Route, Switch } from "react-router-dom";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Tasks from "./Tasks";

const Routes = ({ colors }) => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} render={() => <Tasks />} />
        <Route exact path={"/task3"} render={() => <Task3 colors={colors} />} />
        <Route exact path={"/task4"} render={() => <Task4 />} />
        <Route exact path={"/task5"} render={() => <Task5 />} />
      </Switch>
    </>
  );
};

export default Routes;
