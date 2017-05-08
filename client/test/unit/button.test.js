import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import Button from '../../app/components/Button';

describe('Button', function(){
  describe('minimal properties', function(){
    before(function(){
      this.wrapper = shallow(
        <Button>
          Test
        </Button>
      );
      this.button = this.wrapper.find('button');
    });

    it('renders a button', function(){
      expect(this.button).to.have.length(1);
    });

    it('button has a default style class', function() {
      expect(this.button.props().className).to.include('btn-default');
    });
  });
  describe('button with success style',function(){
    before(function(){
      this.wrapper = shallow(
        <Button style="success">
          Test
        </Button>
      );
      this.button = this.wrapper.find('button');
    });

    it('renders a button', function(){
      expect(this.button).to.have.length(1);
    });

    it('button has a success style class ', function() {
      expect(this.button.props().className).to.include('btn-success');
    });
  });
  describe('button with danger style',function(){
    before(function(){
      this.wrapper = shallow(
        <Button style="danger">
          Test
        </Button>
      );
      this.button = this.wrapper.find('button');
    });

    it('renders a button', function(){
      expect(this.button).to.have.length(1);
    });

    it('button has a danger style class ', function() {
      expect(this.button.props().className).to.include('btn-danger');
    });
  });
});
