import React, { Component } from "react";
import "../syle/pageMain.scss";
import search from "../syle/imgs/search.png";
import axios from "axios";
import ShowData from "./showData";


export default class Main extends Component {
  search;
  state = {
    data: [],
  };
  handelSubmit = (e) => {
    e.preventDefault();
    axios(`https://api.tvmaze.com/search/shows?q=${this.search}`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
    setTimeout(() => {
      console.log(this.state.data);
    }, 1000);
  };

  render() {
    return (
      <div className="main">
        <div className="form-input">
          <form action="" onSubmit={this.handelSubmit}>
            <input
              type="text"
              onChange={(e) => (this.search = e.target.value.trim())}
            />
            <input type="image" src={search} />
          </form>
        </div>
       
         {this.state.data.length>0?<ShowData data={this.state.data} />:null}
        
      </div>
    );
  }
}
