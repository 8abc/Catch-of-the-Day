import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  //1. Create the inital state as a property - the state of the app when the page loads
  //2. Inside of state describe the different states that you will be using forthe application

  state = {
    fishes: {},
    order: {}
  };

  //hook into the very first second the app loads like onload();
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      console.log("restoring");
      console.log(JSON.parse(localStorageRef));
      //JSON.parse changes it from string to JSON object
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    //ref in firebase is a reference to a piece of data in the databse
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeID,
      JSON.stringify(this.state.order)
    );
  }
  //soon as the component is unmounting from the page
  componentWillUnmount() {
    console.log("unmounted");
    base.removeBinding(this.ref);
  }
  //3. state needs to live in the same method that is updating
  //never want to go into state and modify it directly, called a mutation in javascript
  addFish = fish => {
    //1. Take a copy of the existing state
    //this is called an object spread and how you make a copy in javascript
    const fishes = { ...this.state.fishes };
    //2. add our new fish to that fishes variable
    //Date.now() gives you the number of miliseconds and gives you a unique value
    //fish is from AddFishForm
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    //pass the piece of state you want to update within setState
    //we want to update the list of fishes and update it to fishes
    //takes our copied old fishes from line 19, plus new fish from line 23
    //overrides the existing state in line 11, which then triggers a change in react if displayed on the page it will show up
    this.setState({
      //if your property and value are the same in ES6 you can just pass fishes
      //same as fishes: fishes;
      //Adding a new fish takes the data from the form and adds it to a new state within App
      fishes
    });
  };

  updateFish = (key, updateFish) => {
    //1. take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2, update that state
    fishes[key] = updateFish;
    //3. set that to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    //the state we want to update is fishes and we want to update it with sampleFishes from line5
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. either add to the order, or update the number in the oder
    order[key] = order[key] + 1 || 1;
    //3. call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {/* Object.keys allows us to loop over every fish object */}
            {/* .map will return a key for each fish in a p tag */}
            {/* This renders every fish in an unordered list with a unique key*/}
            {Object.keys(this.state.fishes).map(key => (
              // details in the name of the prop used in Fish.js and was added to the obect
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/* object spread takes everything from state and spread everything from state into order */}
        <Order {...this.state} />
        {/* from AddFishForm */}
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
