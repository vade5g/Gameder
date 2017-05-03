import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Button from './Button';

const profiles=[{username:'johnsnow',image:'none',},{username:'cersei',image:'none'}]

export default class Discovery extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.randomUser(),
    };
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickDeny = this.clickDeny.bind(this);
  }

  randomUser() {
    let i = Math.floor(Math.random()*((profiles.length-1)-0+1)+0);
    if(!this.state)
      return profiles[i];

    return profiles[i] !== this.state.currentUser
      ? profiles[i]
      : this.randomUser();
  }

  clickSuccess(){
    this.newUser();
  }

  clickDeny(){
    this.newUser();
  }

  newUser(){
    this.setState({
      currentUser: this.randomUser()
    })
  }

  render(){
    let user=this.randomUser();
    return(
      <div>
        <UserView user={user} onSuccessClick={this.clickSuccess} onDenyClick={this.clickDeny}/>
      </div>
    );
  }
}
