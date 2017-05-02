import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const UserShape = {
  username: PropTypes.string,
  image: PropTypes.string
};

class UserView extends Component{
  render(){
    console.log(this.props)
    const username = this.props.user.username;
    return(
      <div >
        <img src={`/assets/accounts/${username}/avatar.jpg`} className="img-rounded img-responsive center-block" alt="Cinque Terre" width="300" height="500"/>
        <div className="center">
        <h3>{`Username: ${username}`}</h3>
          <Button className='btn-circle yes' style="success" onClick={this.props.onSuccessClick}>Yes</Button>
          <Button className='btn-circle no' style="danger" onClick={this.props.onDenyClick}>No</Button>
        </div>
      </div>
    );
  }
}

UserView.propTypes={
  user: PropTypes.shape(UserShape),

}

export default UserView;

export {
  UserShape,
};
