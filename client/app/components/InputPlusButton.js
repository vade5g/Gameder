import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

  render(){
    return(
      <div id="language-inputs">
        <label>Languages</label>
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
    this.props.example,
  ],

}
InputPlusButton.propTypes={
  label:PropTypes.string,
  values:PropTypes.array,
  example:PropTypes.string,
}
