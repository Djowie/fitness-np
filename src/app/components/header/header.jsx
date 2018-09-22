import React, { Component } from "react";
import { Menu, Header, Icon, Grid } from "semantic-ui-react";

export class HeaderNav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={2}>
          <Header as="h4" icon>
            <Icon name="weight" />
            NextPhysique
          </Header>
        </Grid.Column>
        <Grid.Column width={14}>
          <Menu>
            <Menu.Item
              name="home"
              content="Home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="strength"
              content="Strength"
              active={activeItem === "strength"}
              onClick={this.handleItemClick}
            />{" "}
            <Menu.Item
              name="food"
              content="Food"
              active={activeItem === "food"}
              onClick={this.handleItemClick}
            />{" "}
            <Menu.Item
              name="settings"
              content="Settings"
              active={activeItem === "settings"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HeaderNav;
