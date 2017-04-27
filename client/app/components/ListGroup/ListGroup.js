import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroupItem, { iconShape } from './ListGroupItem';

export default class ListGroup extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: props.items,
    }
  }

  renderListItems(){
    const {
      items,
      itemIcon,
      id,
    } = this.props;

    const list = [];

    items.forEach((item, index) => {
      list.push(
        <ListGroupItem key={index} icon={itemIcon} item={item} parentId={id} index={index}/>
      )
    });

    return list;
  }

  render(){
    const {
      id,
      className,
    } = this.props;

    return(
      <ul className={`list-group ${className? className: ''}`} id={id?id:''}>
        {this.renderListItems()}
      </ul>
    );
  }
}

ListGroup.propTypes = {
  items: PropTypes.array,
  itemIcon: PropTypes.shape(iconShape),
  id: PropTypes.string,
  className: PropTypes.string,
}
