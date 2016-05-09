'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'SlideDescription',

  render: function render() {
    return _react2['default'].createElement(
      'span',
      { className: 'image-gallery-slides__item__description' },
      this.props.item.description
    );
  }
});
module.exports = exports['default'];