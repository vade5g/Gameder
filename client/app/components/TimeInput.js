import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TimeInput extends Component{

  render(){
    const {
      className,
      label
    }=this.props;

    let labelTag = label ? (<label className='control-label'>{label}</label>) : undefined;
    return(
      <div>
        {labelTag}
        <input type="time" className={className}/>
      </div>
    );
  }

}

TimeInput.PropTypes={
  className:PropTypes.string,
  label:PropTypes.string,
};
