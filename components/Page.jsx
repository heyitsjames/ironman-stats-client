import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import OtherPage from './OtherPage';

const propTypes = { };

// example child component at /hello
export default class Page extends Component {
  render() {
    return <div>parent <OtherPage /></div>;
  }
}

Page.propTypes = propTypes;
