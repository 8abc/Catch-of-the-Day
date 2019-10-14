import React from "react";
import { formatPrice } from "../helpers";
class Fish extends React.Component {
  render() {
    //set multiple variables in a single shot this takes this.props.details and puts it in a varialble image | name
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        {/* details comes from App.js */}
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          {/* formatPrice from helpers.js */}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          //   when add to order is clicked addToOrder will run and give it the index
          // inline because only one function will run
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {/* ternary statement */}
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
