import React, { Component } from 'react';
import PropTypes from 'prop-types';

const iconShape = {
  className: PropTypes.string,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default class ListGroupItem extends Component {
  render(){
    const {
      parentId,
      item,
      icon,
      index,
    } = this.props;

    const iconItem = icon
    ? icon.clickable
      ? (
        <a href={`#${parentId}`} onClick={ev => icon.onClick(ev, index)} className="pull-right">
          <i className={`fa ${icon.className}`}/>
        </a>
      )
      : (<i className={`fa ${icon.className} pull-right`}/>)
    : null;

    return(
      <li className='list-group-item'>
        {item}
        {iconItem}
      </li>
    );
  }
}

export {
  iconShape
};

ListGroupItem.propTypes = {
  item: PropTypes.string,
  parentId: PropTypes.string,
  icon: PropTypes.shape(iconShape),
  index: PropTypes.number
}
