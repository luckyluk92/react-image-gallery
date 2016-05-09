'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

exports['default'] = _react2['default'].createClass({
  displayName: 'RightNav',

  mixins: [_reactAddonsPureRenderMixin2['default']],

  onTouchTap: function onTouchTap(e) {
    e.preventDefault();
    this.props.onClick();
  },

  cssClasses: function cssClasses() {
    return (0, _classnames2['default'])('image-gallery-right-nav', {
      'image-gallery-right-nav--inactive': !this.props.active
    });
  },

  render: function render() {
    return _react2['default'].createElement('a', {
      className: this.cssClasses(),
      onTouchTap: this.onTouchTap
    });
  }
});
module.exports = exports['default'];