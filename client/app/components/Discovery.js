import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Button from './Button';

// does not look good though
let profiles = {};

export default class Discovery extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
    };
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickDeny = this.clickDeny.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/profiles')
      .then(res => {
        profiles = res.data;
        this.setState({
          currentUser: this.getRandomUser(),
        });
      });
  }

  getRandomUser() {
    let i = Math.floor(Math.random()*((profiles.length-1)-0+1)+0);
    if(!this.state)
      return profiles[i];

    return profiles[i] !== this.state.currentUser
      ? profiles[i]
      : this.getRandomUser();
  }

  clickSuccess(){
    this.newUser();
  }

  clickDeny(){
    this.newUser();
  }

  newUser(){
    this.setState({
      currentUser: this.getRandomUser(),
    });
  }

  render(){
    return(
      <div>
        <UserView user={this.state.currentUser} onSuccessClick={this.clickSuccess} onDenyClick={this.clickDeny}/>
      </div>
    );
  }
}
