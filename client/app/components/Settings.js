import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';
import Dropdown from './Dropdown';
import TimeInput from './TimeInput';
import InputPlusButton from './InputPlusButton';

export default class Settings extends Component {

  constructor(props){
    super(props);

    this.addLanguageButtonClick = this.addLanguageButtonClick.bind(this);
  }



  renderLanguages() {
    const languages = [];
    for(let language of this.props.languages) {
      languages.push(
        <li className='list-group-item'>
          {language}
          <a href="#" className="pull-right">
        	 <i className="fa fa-times"></i>
          </a>
        </li>
      );
    }
    return languages;
  }

  addLanguageButtonClick(ev) {
    const value = this.languageInput.state.value;
    if(!value)
      return;
    this.props.languages.push(
      value
    );
    this.languageInput.state.value = '';
    this.forceUpdate();
  }

  render() {
    return (
      <form className="row">
        <div className="col-md-6">
          <h3>Personal</h3>
          <hr/>
          <TextInput label="First Name" placeholder="Seppo"/>
          <TextInput label="Second Name" placeholder="Makinen"/>
          <label>Gender</label>
          <Dropdown type='select' title='Gender' options={['Female','Male','undefined']}/>
          <TextInput type ="date" label="Date of Birth" placeholder="06.06.1966"/>
          <TextInput label="Country" placeholder="Ponyland"/>
          <TextInput label="City" placeholder="Unicorntown"/>
          <TextInput label="Mother Tongue" placeholder="English"/>
        </div>
        <div className="col-md-6">
          <h3>Discovery settings</h3>
          <hr/>
            <InputPlusButton example="English" label="Languages"/>
            <InputPlusButton example="CS:GO" label="Games"/>
          <div className="form-group">
            <label>Who are you looking for ?</label>
            <Dropdown type='select' title='Gender' options={['Female','Male','undefined']}/>
          </div>
          <div className="form-group">
            <Dropdown type='checkboxes' title='Age range' options={['0-10','10-15','16-20','20-25','25-30','30-']}/>
          </div>
          <div className="form-group">
            <label>The most suitable time</label>
            <Dropdown className="form-control col-md-6" type='checkboxes' title='Week days' options={['Mondays','Tuesday','Wednesday','Thursday','Friday','Suturday','Sunday']}/>
            <TimeInput label="From: " className="form-control"/>
            <TimeInput label="Till: " className="form-control"/>
          </div>
        </div>
      </form>
    );
  }
}

Settings.defaultProps = {
  languages: [
    'English',
  ],
  games: [
    'CS:GO',
    'DOTA',
  ],
}
