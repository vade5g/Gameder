import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <h1 className='logo'>Gameder</h1>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
