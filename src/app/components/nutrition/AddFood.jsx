import React, { Component } from "react";
import firebase from "../../../firebaseConf";
import "./addFood.css";
import { Table, Form, Grid, Button } from "semantic-ui-react";

export class AddFood extends Component {
  state = {
    selectedFood: {
      uid: null,
      brand: null,
      name: null,
      calories: null,
      carbs: null,
      protein: null,
      fiber: null,
      fats: null,
      saturatedFats: null,
      polyFats: null,
      monoFats: null,
      transFats: null,
      cholestrol: null,
      sodium: null,
      potassium: null,
      sugar: null,
      servings: [
        {
          size: null,
          multiplier: 1,
          unitOfMeasure: null
        }
      ]
    },
    foods: []
  };

  componentDidMount() {
    firebase
      .app()
      .firestore()
      .collection("food")
      .onSnapshot(snapshot => {
        this.setState({
          ...this.state,
          foods: snapshot.docs.map(d => ({
            ...d.data(),
            uid: d.id
          }))
        });
      });
  }

  componentWillUnmount() {
    // TODO remove handler above
  }

  selectFood(e) {
    this.setState({
      selectedFood: {
        uid: e.uid,
        name: e.name,
        brand: e.brand,
        calories: Number(e.calories),
        carbs: Number(e.carbs),
        protein: Number(e.protein),
        fats: Number(e.fats),
        fiber: Number(e.fiber),
        saturatedFats: Number(e.saturatedFats),
        polyFats: Number(e.polyFats),
        monoFats: Number(e.monoFats),
        transFats: Number(e.transFats),
        cholestrol: Number(e.cholestrol),
        sodium: Number(e.sodium),
        potassium: Number(e.potassium),
        sugar: Number(e.sugar),
        servings: [
          {
            multiplier: 1,
            //TODO Perhaps we should make sure that we either set
            //TODO multiple servings into the state, or select the
            //TODO multiplier x1
            size: Number(e.servings[0].size),
            unitOfMeasure: e.servings[0].unitOfMeasure
          }
        ]
      }
    });
    console.log(e);
  }

  handleChange(event) {
    const targetName = event.target.name;
    const value = event.target.value;
    //TODO Create a more generic solution, discuss this with Kevin
    if (targetName === "servings-size") {
      //current object
      const numberOfLoops = this.state.selectedFood.servings.length;
      for (let i = 0; i < numberOfLoops; i++) {
        //copy current state
        let oldState = JSON.parse(JSON.stringify(this.state.selectedFood));
        oldState.servings[i].size = Number(value);
        this.setState({ selectedFood: oldState });
      }
    } else if (targetName === "servings-unitOfMeasure") {
      //current object
      const numberOfLoops = this.state.selectedFood.servings.length;
      for (let i = 0; i < numberOfLoops; i++) {
        //copy current state
        let oldState = JSON.parse(JSON.stringify(this.state.selectedFood));
        oldState.servings[i].unitOfMeasure = value;
        this.setState({ selectedFood: oldState });
      }
    } else {
      const newInputvalue = { ...this.state.selectedFood, [targetName]: value };
      this.setState({ selectedFood: newInputvalue });
    }
  }

  handleServingChanged() {}

  doSaveSomeFood() {
    //check whether to add or edit by uid
    if (this.state.selectedFood.uid === null) {
      //create new record
      // console.log(this.state.selectedFood);
      firebase
        .app()
        .firestore()
        .collection("food")
        .doc()
        .set({
          name: this.state.selectedFood.name,
          brand: this.state.selectedFood.brand,
          calories: Number(this.state.selectedFood.calories),
          carbs: this.state.selectedFood.carbs,
          protein: Number(this.state.selectedFood.protein),
          fats: Number(this.state.selectedFood.fats),
          fiber: Number(this.state.selectedFood.fiber),
          saturatedFats: Number(this.state.selectedFood.saturatedFats),
          polyFats: Number(this.state.selectedFood.polyFats),
          monoFats: Number(this.state.selectedFood.monoFats),
          transFats: Number(this.state.selectedFood.transFats),
          cholestrol: Number(this.state.selectedFood.cholestrol),
          sodium: Number(this.state.selectedFood.sodium),
          potassium: Number(this.state.selectedFood.potassium),
          sugar: Number(this.state.selectedFood.sugar),
          servings: this.state.selectedFood.servings
        })
        .then(
          value => {
            // Het is gelukt!
          },
          error => {
            console.error(error);
            // Er is wat fout gegaan
          }
        );
      // TODO Ask Kevin what to do how to do errorhandling;
    } else {
      // update existing record
      firebase
        .app()
        .firestore()
        .collection("food")
        .doc("/" + this.state.selectedFood.uid)
        .update(this.state.selectedFood);
      // TODO  Hier ook :-D - Kevin
    }

    // /food/{uid}/

    // .doc('plaats hier food ui')
    // .delete();

    // .add({ }) // maak nieuwe doc

    // .doc('plaats uid van food hier')
    // .set({ }) // overschijrf alleuzz
    // .update({ }) // alleen velden die meoten wijzigen
  }
  render() {
    //Bind things, need to figure out why :).
    this.selectFood = this.selectFood.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.doSaveSomeFood = this.doSaveSomeFood.bind(this);

    return (
      <div>
        <Grid className="addFoodContainer">
          <Grid.Row>
            <Form.Input
              name="uid"
              type="hidden"
              value={this.state.selectedFood.uid || ""}
            />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.doSaveSomeFood} className="nutrition-form">
                <h2>Add food</h2>
                <Form.Group>
                  <Form.Input
                    label="Name"
                    width={6}
                    placeholder="Name"
                    name="name"
                    value={this.state.selectedFood.name || ""}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    label="Brand"
                    width={6}
                    placeholder="Brand"
                    name="brand"
                    value={this.state.selectedFood.brand || ""}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Calories"
                    placeholder="Calories"
                    name="calories"
                    width={4}
                    value={
                      this.state.selectedFood.calories !== null
                        ? this.state.selectedFood.calories
                        : ""
                    }
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Carbohydrates"
                    placeholder="carbs"
                    name="carbs"
                    value={
                      this.state.selectedFood.carbs !== null
                        ? this.state.selectedFood.carbs
                        : ""
                    }
                    onChange={this.handleChange}
                    width={3}
                    required
                  />
                  <Form.Input
                    label="Protein"
                    placeholder="protein"
                    name="protein"
                    value={
                      this.state.selectedFood.protein !== null
                        ? this.state.selectedFood.protein
                        : ""
                    }
                    width={3}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    label="Fats"
                    placeholder="fats"
                    name="fats"
                    width={3}
                    value={
                      this.state.selectedFood.fats !== null
                        ? this.state.selectedFood.fats
                        : ""
                    }
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Fiber"
                    placeholder=""
                    name="fiber"
                    width={2}
                    value={
                      this.state.selectedFood.fiber !== null
                        ? this.state.selectedFood.fiber
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Sodium"
                    placeholder=""
                    name="sodium"
                    width={2}
                    value={
                      this.state.selectedFood.sodium !== null
                        ? this.state.selectedFood.sodium
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Potassium"
                    placeholder=""
                    width={2}
                    name="potassium"
                    value={
                      this.state.selectedFood.potassium !== null
                        ? this.state.selectedFood.potassium
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Sugar"
                    placeholder=""
                    width={2}
                    name="sugar"
                    value={
                      this.state.selectedFood.sugar !== null
                        ? this.state.selectedFood.sugar
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Saturated Fats"
                    width={2}
                    placeholder=""
                    name="saturatedFats"
                    value={
                      this.state.selectedFood.saturatedFats !== null
                        ? this.state.selectedFood.saturatedFats
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Poly Fats"
                    placeholder=""
                    width={2}
                    name="polyFats"
                    value={
                      this.state.selectedFood.polyFats !== null
                        ? this.state.selectedFood.polyFats
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Mono fats"
                    placeholder=""
                    width={2}
                    name="monoFats"
                    value={
                      this.state.selectedFood.monoFats !== null
                        ? this.state.selectedFood.monoFats
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Trans Fats"
                    placeholder=""
                    width={2}
                    name="transFats"
                    value={
                      this.state.selectedFood.transFats !== null
                        ? this.state.selectedFood.transFats
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Cholestrol"
                    width={2}
                    placeholder=""
                    name="cholestrol"
                    value={
                      this.state.selectedFood.cholestrol !== null
                        ? this.state.selectedFood.cholestrol
                        : ""
                    }
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Input
                    label="Serving size"
                    width={2}
                    placeholder=""
                    name="servings-size"
                    value={this.state.selectedFood.servings[0].size || ""}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    label="Unit of Measure"
                    width={3}
                    placeholder=""
                    name="servings-unitOfMeasure"
                    value={
                      this.state.selectedFood.servings[0].unitOfMeasure || ""
                    }
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Button color="blue" type="submit" className="nutrition-submit">
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h2>Foods</h2>
              <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Food</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.foods.map(f => (
                    <Table.Row key={f.uid} onClick={() => this.selectFood(f)}>
                      <Table.Cell>{f.name}</Table.Cell>
                      <Table.Cell>{f.brand}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AddFood;
