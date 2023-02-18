import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown--button">Dropdown</button>
      <div className="dropdown--content">
        <NavLink to="#">Link 1</NavLink>
        <NavLink to="#">Link 2</NavLink>
        <NavLink to="#">Link 3</NavLink>
      </div>
    </div>
  );
};
