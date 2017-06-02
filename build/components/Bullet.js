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
  displayName: 'Bullet',

  mixins: [_reactAddonsPureRenderMixin2['default']],

  onTouchTap: function onTouchTap(e) {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(this.props.index);
    }
  },

  cssClasses: function cssClasses() {
    return (0, _classnames2['default'])('image-gallery-bullets__item', {
      'image-gallery-bullets__item--active': this.props.active
    });
  },

  render: function render() {
    return _react2['default'].createElement('li', {
      className: this.cssClasses(),
      onTouchTap: this.onTouchTap
    });
  }
});
module.exports = exports['default'];