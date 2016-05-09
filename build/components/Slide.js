'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = SlideImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function SlideImporter(Image, SlideDescription) {
  if (!Image || !SlideDescription) {
    throw "You didn't pass required dependencies";
  }
  return _react2['default'].createClass({
    displayName: 'Slide',

    mixins: [_reactAddonsPureRenderMixin2['default']],

    getDefaultProps: function getDefaultProps() {
      return {
        showDescription: false
      };
    },

    getInitialState: function getInitialState() {
      return {
        imageCssClass: this.props.server ? 'image-gallery-slides__item__image--loaded' : ''
      };
    },

    cssClasses: function cssClasses() {
      var _classNames;

      return (0, _classnames2['default'])('image-gallery-slides__item', (_classNames = {}, _defineProperty(_classNames, 'image-gallery-slides__item--' + this.props.alignment, this.props.alignment), _defineProperty(_classNames, '' + this.props.item.originalClass, this.props.item.originalClass), _classNames));
    },

    imageCssClasses: function imageCssClasses() {
      return ['image-gallery-slides__item__image', this.state.imageCssClass].join(' ');
    },

    handleImageLoad: function handleImageLoad(event) {
      // slide images have an opacity of 0, onLoad the class 'loaded' is added
      // so that it transitions smoothly when navigating to non adjacent slides
      this.setState({
        imageCssClass: 'image-gallery-slides__item__image--loaded'
      });
    },

    renderDescription: function renderDescription() {
      if (this.props.showDescription) {
        return _react2['default'].createElement(SlideDescription, { item: this.props.item });
      }
    },

    render: function render() {
      return _react2['default'].createElement(
        'div',
        {
          className: this.cssClasses()
        },
        _react2['default'].createElement(Image, {
          className: this.imageCssClasses(),
          src: this.props.item.original,
          alt: this.props.item.originalAlt,
          handleLoad: this.handleImageLoad,
          defaultImage: this.props.item.originalDefault
        }),
        this.renderDescription()
      );
    }
  });
}

module.exports = exports['default'];