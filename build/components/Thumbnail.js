'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = ThumbnailImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function ThumbnailImporter(Image) {
  if (!Image) {
    throw "You didn't pass required dependencies";
  }

  return _react2['default'].createClass({
    displayName: 'Thumbnail',

    mixins: [_reactAddonsPureRenderMixin2['default']],

    mouseOver: function mouseOver(e) {
      this.props.mouseOver(this.props.item, this.props.index);
    },

    mouseLeave: function mouseLeave(e) {
      this.props.mouseLeave(this.props.item, this.props.index);
    },

    onTouchTap: function onTouchTap(e) {
      e.preventDefault();
      if (this.props.onClick) {
        this.props.onClick(this.props.item, this.props.index);
      }
    },

    cssClasses: function cssClasses() {
      return (0, _classnames2['default'])('image-gallery-thumbnails__item', this.props.classNames, {
        'image-gallery-thumbnails__item--active': this.props.active
      });
    },

    render: function render() {
      return _react2['default'].createElement(
        'a',
        {
          onMouseOver: this.mouseOver,
          onMouseLeave: this.mouseLeave,
          className: this.cssClasses(),
          onTouchTap: this.onTouchTap
        },
        _react2['default'].createElement(Image, {
          className: 'image-gallery-thumbnails__item__image',
          src: this.props.item.thumbnail,
          alt: this.props.item.thumbnailAlt,
          defaultImage: this.props.item.thumbnailDefault
        })
      );
    }

  });
}

module.exports = exports['default'];