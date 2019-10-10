import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!!!</h2>
        <AddFishForm addFish={this.props.addFish} />
        {/* how do you get a function from one component to another component, you use props */}
        {/* anything that gets passed into the component is available on the props object. thats how you get anything anywhere*/}
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
