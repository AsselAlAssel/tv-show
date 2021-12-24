import React, { Component } from "react";
import no from "../syle/imgs/no.jpg";

export default class Card extends Component {
  
  render() {
    return (
      <div className="card">
        <span>{this.props.data.show.name}</span>
        <a href="/aboutMove">
       
          {this.props.data.show.image == null ? (
            <img src={no} alt="" />
          ) : (
            <img src={this.props.data.show.image.medium} alt="" />
          )}
        </a>
      </div>
    );
  }
}


