import React from "react";

import { Dropdown } from "components/dropdown";

import "./style.scss";

export const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside--tab">
        <input type="checkbox" id="chck1" />
        <label className="aside--tab-label" htmlFor="chck1">
          Article 1
        </label>
        <div className="aside--tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
          reiciendis!
        </div>
      </div>
      <div className="aside--tab">
        <input type="checkbox" id="chck2" />
        <label className="aside--tab-label" htmlFor="chck2">
          Article 2
        </label>
        <div className="aside--tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <Dropdown />
    </aside>
  );
};
