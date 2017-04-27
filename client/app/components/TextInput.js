import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TextInput extends Component{
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: props.value,
    }
  }

  onInputChange(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  render(){
    const {
      className,
      value,
      placeholder,
      label,
      type
    } = this.props;

    const input = (
      <input type={type} className={className} value={this.state.value} onChange={this.onInputChange} placeholder={placeholder}/>

    );

    if(label)
      return(
        <div>
          <label className='control-label'>{label}</label>
          {input}
        </div>
      );
    else{
      return input;
    }
  }
}

TextInput.defaultProps = {
  className: 'form-control',
  value: '',
  placeholder: '',
  type:'text'

};

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,

};
