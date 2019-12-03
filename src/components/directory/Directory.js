import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.styles.scss";
import sections from "./directory.data";

class Directory extends Component {
  constructor() {
    super();
    this.state = { sections: sections };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
