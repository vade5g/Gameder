import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';
import Dropdown from './Dropdown';



export default class Settings extends Component {
  render() {
    return (
      <form>
        <TextInput label="Language" placeholder="English"/>
        <Button style="success" className="plus-button btn-circle "><i className="fa fa-plus"></i></Button>
        <TextInput label="Games" placeholder="CS:GO"/>
        <Button style="success" className="plus-button btn-circle "><i className="fa fa-plus"></i></Button>
        <div className="form-group">
          <label>Who are you looking for ?</label>
          <Dropdown className="form-control col-md-6" type='select' title='Gender' options={['Female','Male','undefined']}/>
        </div>
        <div className="form-group">
          <Dropdown className="form-control " type='select' title='Age range' options={['0-10','10-15','16-20','20-25','25-30','30-']}/>
        </div>
        <div classNmae="form-group">
          <label>The most suitable time</label>
          <Dropdown className="form-control col-md-6" type='select' title='Week days' options={['Mondays','Tuesday','Wednesday','Thursday','Friday','Suturday','Sunday']}/>
        </div>
      </form>
    );
  }
}
