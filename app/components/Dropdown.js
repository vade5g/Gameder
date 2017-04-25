import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Dropdown extends Component{

  getInitialState(){
    return {selectValue:'Gender'};
  }
  changeValue(ev){
    this.setState({selectValue:ev.target.value});
  }
  render(){
    return(
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.selectValue}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div>
    );
  }
}
