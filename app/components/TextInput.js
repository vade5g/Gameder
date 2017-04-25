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
    } = this.props;

    let labelTag = label ? (<label className='control-label'>{label}</label>) : undefined;
    return(
      <div>
        {labelTag}
        <input type="text" className={className} value={this.state.value} onChange={this.onInputChange} placeholder={placeholder}/>
      </div>
    );
  }
}

TextInput.defaultProps = {
  className: 'form-control',
  value: '',
  placeholder: '',
};

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};
