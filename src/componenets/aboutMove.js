import React, { Component } from "react";
export default class AboutMove extends Component {
  render() {
    return (
      <div>
          <p>{this.props.data.score}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea ipsam aliquid neque consequuntur vero rem blanditiis dolor expedita quaerat. Aliquam doloribus voluptatibus ipsum culpa minima fuga magni voluptate nisi.</p>
      </div>
    );
  }
}
