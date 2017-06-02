'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = SlidesContainerImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _mixinsAlignment = require('./mixins/alignment');

var _mixinsAlignment2 = _interopRequireDefault(_mixinsAlignment);

function SlidesContainerImporter(Slide, LeftNav, RightNav) {
  return _react2['default'].createClass({
    displayName: 'SlidesContainer',

    mixins: [_mixinsAlignment2['default'], _reactAddonsPureRenderMixin2['default']],

    renderNavs: function renderNavs() {
      if (this.props.showNav) {
        return [_react2['default'].createElement(LeftNav, {
          key: 'left-nav',
          onClick: this.props.onSwipedRight,
          active: this.props.infinite || this.props.currentIndex > 0
        }), _react2['default'].createElement(RightNav, {
          key: 'right-nav',
          onClick: this.props.onSwipedLeft,
          active: this.props.infinite || this.props.currentIndex < this.props.items.length - 1
        })];
      }
    },

    renderSlides: function renderSlides() {
      var slides = [];
      for (var i = 0; i < this.props.items.length; i++) {
        var alignment = this.getAlignmentClassName(i);
        if (!this.props.lazyLoad || this.props.lazyLoad && alignment) {
          slides.push(_react2['default'].createElement(Slide, {
            key: i,
            item: this.props.items[i],
            server: this.props.server,
            alignment: alignment,
            showDescription: this.props.showDescription
          }));
        }
      }
      return slides;
    },

    render: function render() {
      if (this.props.items.length > 1) {
        return _react2['default'].createElement(
          _reactSwipeable2['default'],
          {
            onSwipedLeft: this.props.onSwipedLeft,
            onSwipedRight: this.props.onSwipedRight
          },
          _react2['default'].createElement(
            'div',
            { className: 'image-gallery-slides' },
            this.renderSlides(),
            _react2['default'].createElement(
              'div',
              { className: 'image-gallary-slides__nav-container' },
              this.renderNavs()
            )
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          { className: 'image-gallery-slides' },
          this.renderSlides(),
          _react2['default'].createElement(
            'div',
            { className: 'image-gallary-slides__nav-container' },
            this.renderNavs()
          )
        );
      }
    }
  });
}

module.exports = exports['default'];