import React from "react";
import { Grid, Container } from "semantic-ui-react";
import HeaderNav from "../../components/header/header";
import ProgressTable from "../../components/weeklyStats/ProgressTable";
import ProfileCard from "../../components/userStats/ProfileCard";
import { CurrentWeekOverview } from "../../components/currentWeek/CurrentWeekOverview";
import { ProgressGraph } from "../../components/weeklyStats/ProgressGraph";
import { CurrentWeekGraph } from "../../components/currentWeek/CurrentWeekGraph";

export default () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderNav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid columns={2}>
            <h2>Week Statistics</h2>

            <Grid.Column width={7}>
              <ProgressTable />
            </Grid.Column>
            <Grid.Column width={7}>
              <ProgressGraph />
            </Grid.Column>
          </Grid>
        </Grid.Row>

        <Grid.Row>
          <Grid columns={2}>
            <h2>Current Week Statistics</h2>

            <Grid.Column width={10}>
              <CurrentWeekOverview />
            </Grid.Column>
            <Grid.Column width={2}>
              <CurrentWeekGraph />
            </Grid.Column>
          </Grid>
        </Grid.Row>

        <Grid.Row>FOOTER</Grid.Row>
      </Grid>
    </Container>
  );
};
