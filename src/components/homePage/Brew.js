import React from 'react';
import PropTypes from 'prop-types';

export default class Brew {
  constructor(params) {
    this.name = params.name,
    this.brand = params.brand,
    this.price = params.price,
    this.alcoholContent = params.alcoholContent,
    this.pints = 124
  }

Brew.PropTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: Proptypes.number.isRequired
}
}
