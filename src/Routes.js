import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./containers/index";
import View from "./containers/view";



export default ({ childProps }) =>
    <Switch>
        {["/", "/welcome"].map(path => (
            <Route key={path} path={path} exact render={props => <Search {...childProps} />} />
        ))}
        <Route path="/view" exact render={props => <View {...childProps} />} />
    </Switch>;