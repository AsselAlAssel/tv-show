import React, { Component } from 'react';
import "../syle/about.scss"
export default class About extends Component{
    render(){
        return(
            <div className='about'>
                <p>React (create-react-app)</p>
               <p>Basic CSS & HTML</p>
               <p>axios</p>
               <p>TVMAZE API (https://www.tvmaze.com/api)</p>
               <p>React Router</p>
               <p>React Context API</p>
               <h1>Created by Assel Alassel</h1>
            </div>
        )
    }
}