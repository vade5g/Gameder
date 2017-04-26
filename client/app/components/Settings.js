import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';
import Dropdown from './Dropdown';
import TimeInput from './TimeInput';
import ListGroupWithInput from './ListGroup/ListGroupWithInput';

const values = {
  languages: [
    'English',
  ],
  games: [
    'CS:GO',
  ],
};

export default class Settings extends Component {
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
            <ListGroupWithInput label="Languages" placeholder="New language" id="languagesList" items={values.languages}/>
            <ListGroupWithInput example="CS:GO" label="Games" placeholder="New game" id="gamesList" items={values.games}/>
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
