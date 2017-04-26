import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput'
import Button from './Button';


export default class InputPlusButton extends Component{
  constructor(props){
    super(props);

    this.addLanguageButtonClick = this.addLanguageButtonClick.bind(this);
  }

  renderLanguages() {
    const languages = [];
    for(let language of this.props.values) {
      languages.push(
        <li className='list-group-item'>
          {language}
          <a href="#" className="pull-right">
           <i className="fa fa-times"></i>
          </a>
        </li>
      );
    }
    return languages;
  }
  addLanguageButtonClick(ev) {
    const value = this.languageInput.state.value;
    if(!value)
      return;
    this.props.values.push(
      value
    );
    this.languageInput.state.value = '';
    this.forceUpdate();
  }
  render(){
    return(
      <div id="language-inputs">
        <label>{this.props.label}</label>
        <ul className='list-group'>
          {this.renderLanguages()}
        </ul>
        <div className='input-group'>
          <TextInput
            placeholder="New language"
            ref={
              input => this.languageInput = input
            }
          />
          <span className='input-group-btn'>
            <Button style="success" id='language' className="plus-button btn-secondary" onClick={this.addLanguageButtonClick}><i className="fa fa-plus"></i></Button>
          </span>
        </div>
      </div>
    );
  }
}
InputPlusButton.defaultProps = {
  values: [
    'English',
  ],


}
InputPlusButton.propTypes={
  label:PropTypes.string,
  values:PropTypes.array,
  example:PropTypes.string,
}
