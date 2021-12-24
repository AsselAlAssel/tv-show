import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./componenets/navBar";
import Footer from "./componenets/footer";
import "./syle/pageNav.scss";
import Main from "./componenets/main";
import "./componenets/js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./componenets/about";
import AboutMove from "./componenets/aboutMove";


class App extends Component {
  
  render() {
   
    return (
      <div className="container">
        <NavBar />
       <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Main/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/aboutMove"  element={<AboutMove/>} />

      </Routes>
       </BrowserRouter>
        {/* <Footer/> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

