import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';
import Dropdown from './Dropdown';
import TimeInput from './TimeInput';

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
          <div id="language-inputs">
            <label>Languages</label>
            <ul className='list-group'>
              {this.renderLanguages()}
            </ul>
            <div className='input-group'>
              <TextInput
                placeholder="New language"
                ref={
                  input => this.languageInput = input
                }
              />
              <span className='input-group-btn'>
                <Button style="success" id='language' className="plus-button btn-secondary" onClick={this.addLanguageButtonClick}><i className="fa fa-plus"></i></Button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Discovery settings</h3>
          <hr/>
          <TextInput label="Games" placeholder="CS:GO"/>
          <Button style="success" className="plus-button btn-circle"><i className="fa fa-plus"></i></Button>
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
