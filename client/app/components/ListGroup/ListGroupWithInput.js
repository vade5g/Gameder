import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import ListGroup from './ListGroup';
import Button from '../Button';


export default class ListGroupWithInput extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: props.items,
    }
    this.addListItemButtonClick = this.addListItemButtonClick.bind(this);
    this.deleteListItemClick = this.deleteListItemClick.bind(this);
  }

  addListItemButtonClick(ev) {
    const value = this.languageInput.state.value;
    if(!value)
      return;
    this.setState({
      items: this.state.items.concat(value),
    });
    this.languageInput.state.value = '';
  }

  deleteListItemClick(ev, index){
    if(index != undefined)
      this.setState({
        items: this.state.items.filter(
          (item, itemIndex) => itemIndex!=index
        )
      });
  }

  render(){
    const {
      label,
      placeholder,
      id,
    } = this.props;
    const itemIcon = {
      className: 'fa-times',
      clickable: true,
      onClick: this.deleteListItemClick,
    }

    return(
      <div id={id}>
        <label>{label}</label>
        <ListGroup items={this.state.items} itemIcon={itemIcon} id={id}/>
        <div className='input-group'>
          <TextInput
            placeholder={placeholder}
            ref={
              input => this.languageInput = input
            }
          />
          <span className='input-group-btn'>
            <Button style="success" id='language' className="plus-button btn-secondary" onClick={this.addListItemButtonClick}><i className="fa fa-plus"></i></Button>
          </span>
        </div>
      </div>
    );
  }
}

ListGroupWithInput.propTypes={
  label:PropTypes.string,
  items:PropTypes.array,
  placeholder:PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}
