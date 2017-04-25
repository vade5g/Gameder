import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Dropdown extends Component{

  constructor(props) {
    super(props);

    this.changeTitle = this.changeTitle.bind(this);

    this.state = {
      title: props.title,
    }
  }
  changeTitle(ev){
    this.setState({title:ev.target.text});
  }
  getSelect(){
    const list = [];
    let onclick;

    for(let li of this.props.options){
      if(this.props.type=='select'){
        onclick=(this.changeTitle);
        list.push(<li onClick={onclick} ><a href="#">{li}</a></li>)
      }else if(this.props.type=='checkboxes'){
        list.push(<li><a href='#'>
          <div class="checkbox">
            <label><input type="checkbox" className="checkbox-list "value=""/>{li}</label>
          </div>
        </a></li>)
      }else{
        onclick=undefined;
        list.push(<li onClick={onclick} ><a href="#">{li}</a></li>)
      }

    }
    return list;

  }
  render(){
    const className=this.props.className;
    return(
      <div className="dropdown">
        <button className={`${className} data-toggle btn btn-default`}  type="button" data-toggle="dropdown">{this.state.title}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {this.getSelect()}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes={
  className:PropTypes.string,
  title:PropTypes.string,
  type:PropTypes.string,
  options:PropTypes.array
}
