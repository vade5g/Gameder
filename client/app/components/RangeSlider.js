import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "bootstrap-slider/dist/bootstrap-slider";

export default class RangeSlider extends Component{
  getInitialState(){

    return {

      slider:{}

    };

  }

  render() {

    var component = this

    if(this.props.budget){

      var minval = this.props.budget.min

      var maxval = this.props.budget.max

    }

    return (

    <div className="bud_get">

      <a href="#"><i className="fa fa-bookmark-o"></i>Budget</a>
        Filter by price interval: <b>€ 10</b>
        <input id="ex2" ref="budgetinput" type="text" className="span2" value="" data-slider-step="5" data-slider-value="[250,450]"/>
        <b>€ 1000</b>
    </div>
    );
  }

  onChange() {
    // var minBudget = ReactDOM.findDOMNode(this.refs.minBudget).value;

    // var maxBudget = ReactDOM.findDOMNode(this.refs.maxBudget).value;
    // this.props.handleFilterInput("budget",minBudget,maxBudget);
  }
  componentDidMount(){
    var newslider = new Slider(ReactDOM.findDOMNode(this.refs.budgetinput), {});
    this.setState({
      slider:newslider
    })
  }
  componentDidUpdate(){
    var currentslider = this.state.slider
    var value = []
    if(this.props.budget){
      console.log("updating");
      value.push(this.props.budget.min)
      value.push(this.props.budget.max)
      currentslider.setAttribute("data-slider-min",this.props.budget.min)
      currentslider.setAttribute("data-slider-max",this.props.budget.max)
      currentslider.refresh()
      // this.setState({
      //   slider:currentslider
      // })
    }
  }

}
