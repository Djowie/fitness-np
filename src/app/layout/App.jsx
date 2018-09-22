import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Container className="main">
                <Switch>
                  <Route path="/test" component={Homepage} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
