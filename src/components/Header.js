import React from "react";
// stateless functional components
const Header = props => (
  // implicit return doesn't need return because of arrow functions
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the" />
        the{" "}
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
