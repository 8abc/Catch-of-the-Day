import React from "react";
import { getFunName } from "../helpers";

// creating a class
class StorePicker extends React.Component {
  // this is needed for onSubmit to work so it this is not undefined
  //   constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  myInput = React.createRef();
  //   this is does exactly what line 7-10 do
  goToStore = event => {
    //   stops form from submitted
    event.preventDefault();
    // get the text from that input you type .value
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store </h2>
        <button onClick={this.handleClick}>Click me!</button>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
      </form>
    );
  }
}

export default StorePicker;
