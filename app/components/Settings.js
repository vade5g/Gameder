import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';



export default class Settings extends Component {
  render() {
    return (
      <div>
        <TextInput label="Language" placeholder="English"/>
        <Button style="success" className="plus-button btn-circle "><i className="fa fa-plus"></i></Button>
        <TextInput label="Games" placeholder="CS:GO"/>
        <Button style="success" className="plus-button btn-circle "><i className="fa fa-plus"></i></Button>
      </div>
    );
  }
}