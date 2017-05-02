import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "bootstrap-slider/dist/bootstrap-slider";

export default class RangeSlider extends Component{


  render(){

    return(
      <div>
        <b>€ 10</b>
        <input id="ex2" type="text" className="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]"/>
        <b>€ 1000</b>
      </div>
    );
  }

}
