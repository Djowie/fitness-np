import React from "react";
import { Grid, Container } from "semantic-ui-react";
import HeaderNav from "../../components/header/header";
import ProgressTable from "../../components/weeklyStats/ProgressTable";
import ProfileCard from "../../components/userStats/ProfileCard";
import { CurrentWeekOverview } from "../../components/currentWeek/CurrentWeekOverview";

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
            <Grid.Column width={6}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={10}>
              <ProgressTable />
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <CurrentWeekOverview />
        </Grid.Row>

        <Grid.Row>FOOTER</Grid.Row>
      </Grid>
    </Container>
  );
};
