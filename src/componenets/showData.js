import React, { Component, Fragment } from "react";
import Card from "./card";

export default class ShowData extends Component {
  render() {
    return (
      <div className="show-data">
        {this.props.data.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    );
  }
}
