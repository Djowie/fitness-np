import React, { Component } from "react";
import { Card, Icon, Image, CardContent } from "semantic-ui-react";
export class ProfileCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Card.Header>
              <Image
                floated="left"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              Joey Bakx
            </Card.Header>
            <Card.Description className="card-stats-heading">
              Average stats
            </Card.Description>
            <Card.Description> 60,5kg - 13.6%</Card.Description>
            <Card.Description className="card-stats-heading">
              Current Stats
            </Card.Description>
            <Card.Description>60.2kg - 12.9% (21-09-2018)</Card.Description>
            <Card.Meta textAlign="right">
              Goal: Bulking <Icon name="arrow alternate circle up" />
            </Card.Meta>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
