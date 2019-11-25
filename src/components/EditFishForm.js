import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    //get the value the user types with event.currentTarget.value
    console.log(event.currentTarget.value);
    //update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    //bring the changes intp app.js, where state lives with the updateFish function
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" />
        <input type="text" name="image" />
      </div>
    );
  }
}

export default EditFishForm;
