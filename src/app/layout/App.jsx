import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Homepage from "./pages/Homepage";
import AddFood from "../components/nutrition/AddFood";

class App extends Component {
  render() {
    return (
      <Container className="main" fluid>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Container className="main">
                <Switch>
                  <Route path="/addfood" component={AddFood} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </Container>
    );
  }
}

export default App;
