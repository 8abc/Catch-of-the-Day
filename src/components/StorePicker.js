import React from "react";
import { getFunName } from "../helpers";

// creating a class
class StorePicker extends React.Component {
  // this is needed for onSubmit to work so it this is not undefined
  // 1 way
  //   constructor() {
  // super is needed for a constructor
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  // refs allow us to reference something on the DOM
  myInput = React.createRef();
  //   this is does exactly what line 7-10 do
  // 2nd and better way than line 8-12
  // the => allows us to bind goToStore to the StorePicker Component
  goToStore = event => {
    //   stops form from submitting
    event.preventDefault();
    // get the text from that input you type .value
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-they-entered
    // push state allows us to change the URL/page without losing memory
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store </h2>
        {/* inline event handling followed by the function that will run once clicked */}
        {/* there isn't () because we don't want the funciton to run when the page loads */}
        <button onClick={this.handleClick}>Click me!</button>
        <input
          type="text"
          // reference to line 11
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
