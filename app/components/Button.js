import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BUTTON_STYLES = {
  default: 'btn-default',
  danger: 'btn-danger',
  primary: 'btn-primary',
  success: 'btn-success',
  info: 'btn-info',
  warning: 'btn-warning',
  link: 'btn-link',
};

export default class Button extends Component{
  getStyle(){
    const style = this.props.style;

    if(style && style !== '')
      return `btn ${BUTTON_STYLES[style]}`;
  }

  render(){
    const props = this.props;
    return(
      <button className={`${props.className} ${this.getStyle()}`}>{props.children}</button>
    );
  }
}
Button.defaultProps = {
  style: 'default',
  className: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOf(Object.keys(BUTTON_STYLES)),
  id: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};