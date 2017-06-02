'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = ThumbnailsContainerImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function ThumbnailsContainerImporter(Thumbnail) {
  if (!Thumbnail) {
    throw "You didn't pass required dependencies";
  }
  return _react2['default'].createClass({
    displayName: 'ThumbnailsContainer',

    mixins: [_reactAddonsPureRenderMixin2['default']],

    getInitialState: function getInitialState() {
      return {
        containerWidth: 0,
        positionX: 0
      };
    },

    componentDidMount: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },

    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
      if (prevState.containerWidth !== this.state.containerWidth) {
        // adjust thumbnail container when window width is adjusted
        // when the container resizes, thumbnailsTranslateX
        // should always be negative (moving right),
        // if container fits all thumbnails its set to 0

        this.setState({
          positionX: -this._getScrollX(this.props.currentIndex > 0 ? 1 : 0) * this.props.currentIndex
        });
      }

      if (prevProps.currentIndex !== this.props.currentIndex) {
        this._setNewPosition(prevProps.currentIndex, this.props.currentIndex);
      }
    },

    handleResize: function handleResize() {
      var newContainerWidth = this.refs.thumbnails.offsetWidth;
      this.setState({ containerWidth: newContainerWidth });
    },

    cssPosition: function cssPosition() {
      var positionX = this.state.positionX + 'px';
      var translate = 'translate3d(' + positionX + ', 0, 0)';
      return {
        MozTransform: translate,
        WebkitTransform: translate,
        OTransform: translate,
        msTransform: translate,
        transform: translate
      };
    },

    _setNewPosition: function _setNewPosition(oldIndex, newIndex) {
      var positionX = 0;
      if (newIndex !== 0) {
        var indexDifference = Math.abs(oldIndex - newIndex);
        var _scrollX = this._getScrollX(indexDifference);
        if (_scrollX > 0) {
          if (oldIndex < newIndex) {
            positionX = this.state.positionX - _scrollX;
          } else if (oldIndex > newIndex) {
            positionX = this.state.positionX + _scrollX;
          }
        }
      }
      this.setState({ positionX: positionX });
    },

    _getScrollX: function _getScrollX(indexDifference) {
      var thumbnails = _reactDom2['default'].findDOMNode(this.refs.thumbnails);
      if (this.props.disableScroll) {
        return 0;
      }
      if (thumbnails) {
        // no need to scroll
        if (thumbnails.scrollWidth <= this.state.containerWidth) {
          return 0;
        }

        var totalThumbnails = this.props.items.length;

        // total scroll-x required to see the last thumbnail
        var totalScrollX = thumbnails.scrollWidth - this.state.containerWidth;

        // scroll-x required per index change
        var perIndexScrollX = totalScrollX / (totalThumbnails - 1);

        return indexDifference * perIndexScrollX;
      }
    },

    renderThumbnails: function renderThumbnails() {
      var _this = this;

      return this.props.items.map(function (item, index) {
        return _react2['default'].createElement(Thumbnail, {
          key: index,
          item: item,
          index: index,
          active: _this.props.currentIndex === index,
          mouseOver: _this.props.mouseOver,
          mouseLeave: _this.props.mouseLeave,
          onClick: _this.props.onClick
        });
      });
    },

    render: function render() {
      return _react2['default'].createElement(
        'div',
        {
          ref: 'thumbnails',
          className: 'image-gallery-thumbnails',
          style: this.cssPosition()
        },
        this.renderThumbnails()
      );
    }
  });
}

module.exports = exports['default'];