import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Help,
  How,
  Navigation,
  Firstpag
} from "../Routecomponent"

const Routes = () => {
    return (
      <React.Fragment>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path = "/">
                <Firstpag/>
            </Route>
            <Route path="/Help">
              <Help />
            </Route>
            <Route path="/How">
              <How />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
  export default Routes