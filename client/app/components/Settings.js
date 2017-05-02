import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';
import Dropdown from './Dropdown';
import TimeInput from './TimeInput';
import ListGroupWithInput from './ListGroup/ListGroupWithInput';

const values = {
  games: [

  ],
};

export default class Settings extends Component {

  render() {
    return (
      <form className="row">
        <div className="col-md-6">
          <h3>Personal</h3>
          <hr/>
          <TextInput label="Username" placeholder="Seppo55Ponny"/>
          <TextInput label="Email" type="email" placeholder="ponnyOneLove@vamk.fi"/>
          <label>Gender</label>
          <Dropdown type='select' title='Gender' options={['Female','Male','undefined']}/>
          <TextInput type ="date" label="Date of Birth" placeholder="06/06/1966"/>
          <hr/>
          <Button type="submit" style="success">Submit</Button>
        </div>
        <div className="col-md-6">
          <h3>Discovery settings</h3>
          <hr/>
            <ListGroupWithInput example="CS:GO" label="Games" placeholder="New game" id="gamesList" items={values.games}/>
          <label>Who are you looking for ?</label>
          <form className="form-inline">
            <div className="form-group">
              <Dropdown type='select' title='Gender' options={['Female','Male','undefined']}/>
            </div>
            <div className="form-group">
              <Dropdown type='checkboxes' title='Age range' options={['0-10','10-15','16-20','20-25','25-30','30+']}/>
            </div>
          </form>
            <label>The most suitable time</label>
          <form className="form-inline">

          <div className="form-group">
            <Dropdown className="form-control col-md-6" type='checkboxes' title='Week days' options={['Mondays','Tuesday','Wednesday','Thursday','Friday','Suturday','Sunday']}/>
            </div>
            <div className="form-group">
              <Dropdown className="form-control col-md-6" type='checkboxes' title='Time' options={['Morning(6-12)','Afternoon(12-18)','Evening(18-23)','Night(23-6)']}/>
            </div>
            <hr/>
            <Button type="submit" style="success">Submit</Button>

            </form>
          </div>
          
      </form>
    );
  }
}
