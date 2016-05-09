'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

exports['default'] = _react2['default'].createClass({
  displayName: 'Image',

  mixins: [_reactAddonsPureRenderMixin2['default']],

  getInitialState: function getInitialState() {
    return {
      src: this.props.src || this.props.defaultImage
    };
  },

  handleLoadError: function handleLoadError(event) {
    if (this.props.defaultImage) {
      this.setState({
        src: this.props.defaultImage
      });
    }
  },

  render: function render() {
    return _react2['default'].createElement('img', {
      className: this.props.className,
      src: this.state.src,
      alt: this.props.alt,
      onLoad: this.props.handleLoad,
      onError: this.props.handleLoadError || this.handleLoadError
    });
  }
});
module.exports = exports['default'];