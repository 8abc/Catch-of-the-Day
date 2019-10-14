import React from "react";
// 2. add a ref for each value
class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imgaeRef = React.createRef();

  createFish = event => {
    // 1. stops pages from refreshing
    event.preventDefault();
    //3. create fish
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value), // parseFloat stores everything in cents and never have to deal with ingtegars and decimals
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.priceRef.value.value
    };
    //comes from app.js
    this.props.addFish(fish);
    //refresh the form
    //event.currentTarget is the form itself
    //theres a reset method that lives on all forms that will clear it out
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          name="description"
          ref={this.descRef}
          placeholder="Description"
        />
        <input
          name="image"
          type="text"
          ref={this.imgaeRef}
          placeholder="Image"
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
