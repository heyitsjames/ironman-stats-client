import React, { Component, PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func.isRequired
};

export default class OtherPage extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked');
  }

  render() {
    return <div onClick={ this.handleClick }>Click Me!</div>;
  }
}

OtherPage.propTypes = propTypes;
