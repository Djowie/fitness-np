import React, { Component } from "react";
import { Card, Icon, Image, CardContent } from "semantic-ui-react";
import cuid from "cuid";
import moment from "moment";
import { CurrentGoals } from "./goals/CurrentGoals";

const userMockData = {
  id: cuid(),
  firstName: "Joey",
  lastName: "Bakx",
  username: "djowie",
  metric: "kg",
  profilePicture: "https://randomuser.me/api/portraits/med/men/65.jpg",
  lastWeightIn: {
    weight: 60.2,
    fatpercentage: 12.9,
    date: "2018-09-22T20:13:30+00:00"
  },
  averageStats: {
    weight: 60.2,
    fatpercentage: 12.9,
    lastUpdated: "2018-09-22T20:13:30+00:00"
  },
  goal: "bulk",
  level: "intermediate",
  minDelta: 0.1133980925,
  maxDelta: 0.226796185,
  nutritionRatio: {
    lastModifiedDate: "2018-09-22T22:12:06+00:00",
    protein: 30,
    carbs: 45,
    fats: 25
  }
};

export class ProfileCard extends Component {
  state = { user: userMockData };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Card.Header>
              <Image
                floated="left"
                size="mini"
                src={this.state.user.profilePicture}
              />
              {this.state.user.firstName + " " + this.state.user.lastName}
            </Card.Header>
            <Card.Description className="card-stats-heading">
              Average stats
            </Card.Description>
            <Card.Description>
              {this.state.user.averageStats.weight +
                "kg" +
                "-" +
                this.state.user.averageStats.fatpercentage +
                "%"}
            </Card.Description>
            <Card.Description className="card-stats-heading">
              Current Stats
            </Card.Description>
            <Card.Description>
              {this.state.user.lastWeightIn.weight +
                "kg" +
                "-" +
                this.state.user.lastWeightIn.fatpercentage +
                "% (" +
                moment(this.state.user.lastWeightIn.date).format("DD-MM-YYYY") +
                ")"}
            </Card.Description>
            <Card.Meta textAlign="middle">
              <CurrentGoals> </CurrentGoals>
              Goal:
              {this.state.user.goal === "bulk" && " Bulking "}
              {this.state.user.goal === "bulk" && (
                <Icon name="arrow alternate circle up" />
              )}
              {this.state.user.goal === "cut" && " Cutting "}
              {this.state.user.goal === "cut" && (
                <Icon name="arrow alternate circle down" />
              )}
            </Card.Meta>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
