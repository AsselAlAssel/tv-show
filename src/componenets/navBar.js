import React, { Component } from "react";

export default class NavBar extends Component {
 
 hadleMenu=()=>{
     document.querySelector(".nav").classList.toggle("style");
     
 }
    render() {
    return (
      <div className="nav">
        <div className="logo">
          <div>
            <a href="">Tv shows</a>
          </div>
          <div >
           <i class="fa fa-bars" onClick={this.hadleMenu}></i>
          </div>
        </div>
        <div className="home-about">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    );
  }
}
