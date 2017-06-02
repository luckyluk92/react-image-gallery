'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BulletsContainerImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function BulletsContainerImporter(Bullet) {
  if (!Bullet) {
    throw "You didn't pass required dependencies";
  }
  return _react2['default'].createClass({
    displayName: 'BulletsContainer',

    mixins: [_reactAddonsPureRenderMixin2['default']],

    renderBullets: function renderBullets() {
      var bullets = [];
      for (var i = 0; i < this.props.numberOfBullets; i++) {
        bullets.push(_react2['default'].createElement(Bullet, {
          key: i,
          index: i,
          active: this.props.currentIndex == i,
          onClick: this.props.onClick
        }));
      };
      return bullets;
    },

    render: function render() {
      return _react2['default'].createElement(
        'ul',
        { className: 'image-gallery-bullets' },
        this.renderBullets()
      );
    }
  });
}

module.exports = exports['default'];