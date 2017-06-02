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
  displayName: 'GalleryIndex',

  mixins: [_reactAddonsPureRenderMixin2['default']],

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'image-gallery-index' },
      _react2['default'].createElement(
        'span',
        { className: 'image-gallery-index__current' },
        this.props.index + 1
      ),
      _react2['default'].createElement(
        'span',
        { className: 'image-gallery-index__separator' },
        this.props.indexSeparator
      ),
      _react2['default'].createElement(
        'span',
        { className: 'image-gallery-index__total' },
        this.props.total
      )
    );
  }
});
module.exports = exports['default'];