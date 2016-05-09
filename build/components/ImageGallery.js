'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = ImageGalleryImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function ImageGalleryImporter(SlidesContainer, ThumbnailsContainer, BulletsContainer, GalleryIndex) {
  if (!SlidesContainer || !ThumbnailsContainer || !BulletsContainer || !GalleryIndex) {
    throw "You didn't pass required dependencies";
  }
  return _react2['default'].createClass({
    displayName: 'ImageGallery',

    propTypes: {
      items: _react2['default'].PropTypes.array.isRequired,
      showThumbnails: _react2['default'].PropTypes.bool,
      showBullets: _react2['default'].PropTypes.bool,
      showNav: _react2['default'].PropTypes.bool,
      showIndex: _react2['default'].PropTypes.bool,
      showDescription: _react2['default'].PropTypes.bool,
      indexSeparator: _react2['default'].PropTypes.string,
      autoPlay: _react2['default'].PropTypes.bool,
      lazyLoad: _react2['default'].PropTypes.bool,
      infinite: _react2['default'].PropTypes.bool,
      slideInterval: _react2['default'].PropTypes.number,
      onSlide: _react2['default'].PropTypes.func,
      onClick: _react2['default'].PropTypes.func,
      startIndex: _react2['default'].PropTypes.number,
      disableThumbnailScroll: _react2['default'].PropTypes.bool,
      slideOnThumbnailHover: _react2['default'].PropTypes.bool,
      server: _react2['default'].PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
      return {
        lazyLoad: true,
        showThumbnails: true,
        showNav: true,
        showBullets: false,
        showIndex: false,
        showDescription: false,
        infinite: true,
        indexSeparator: ' / ',
        autoPlay: false,
        disableThumbnailScroll: false,
        server: false,
        slideOnThumbnailHover: false,
        slideInterval: 4000,
        startIndex: 0
      };
    },

    getInitialState: function getInitialState() {
      return {
        currentIndex: this.props.startIndex,
        containerWidth: 0
      };
    },

    componentWillMount: function componentWillMount() {
      this._thumbnailDelay = 300;
    },

    componentDidMount: function componentDidMount() {
      this.handleResize();
      if (this.props.autoPlay) {
        this.play();
      }
      window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      if (this._intervalId) {
        window.clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },

    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
      if (prevState.currentIndex !== this.state.currentIndex) {
        // call back function if provided
        if (this.props.onSlide) {
          this.props.onSlide(this.state.currentIndex);
        }
      }
    },

    play: function play() {
      var _this = this;

      if (this._intervalId) {
        return;
      }
      this._intervalId = window.setInterval(function () {
        if (!_this.state.hovering) {
          _this.slideToIndex(_this.state.currentIndex + 1);
        }
      }, this.props.slideInterval);
    },

    pause: function pause() {
      if (this._intervalId) {
        window.clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },

    swipeNext: function swipeNext() {
      this.slideToIndex(this.state.currentIndex + 1, true);
    },

    swipePrev: function swipePrev() {
      this.slideToIndex(this.state.currentIndex - 1, true);
    },

    onBulletChanged: function onBulletChanged(bulletIndex) {
      this.slideToIndex(bulletIndex, true);
    },

    onThumbnailChanged: function onThumbnailChanged(thumbnail, index) {
      this.slideToIndex(index, true);
    },

    // now, event says if the call is a user one
    slideToIndex: function slideToIndex(index, userEvent) {
      var slideCount = this.props.items.length - 1;

      if (index < 0) {
        if (this.props.infinite || !userEvent) {
          this.setState({ currentIndex: slideCount });
        } else {
          this.setState({ currentIndex: 0 });
        }
      } else if (index > slideCount) {
        if (this.props.infinite || !userEvent) {
          this.setState({ currentIndex: 0 });
        } else {
          this.setState({ currentIndex: slideCount });
        }
      } else {
        this.setState({ currentIndex: index });
      }
      if (userEvent) {
        if (this._intervalId) {
          // user event, reset interval
          this.pause();
          this.play();
        }
      }
    },

    handleMouseOver: function handleMouseOver() {
      this.setState({ hovering: true });
    },

    handleMouseLeave: function handleMouseLeave() {
      this.setState({ hovering: false });
    },

    handleResize: function handleResize() {
      var gallery = this.refs.imageGallery;
      this.setState({ containerWidth: gallery.offsetWidth });
    },

    handleMouseOverThumbnails: function handleMouseOverThumbnails(thumbnail, index) {
      var _this2 = this;

      if (this.props.slideOnThumbnailHover) {
        this.setState({ hovering: true });
        if (this._thumbnailTimer) {
          window.clearTimeout(this._thumbnailTimer);
          this._thumbnailTimer = null;
        }
        this._thumbnailTimer = window.setTimeout(function () {
          _this2.slideToIndex(index);
          _this2.pause();
        }, this._thumbnailDelay);
      }
    },

    handleMouseLeaveThumbnails: function handleMouseLeaveThumbnails(thumbnail, index) {
      if (this._thumbnailTimer) {
        window.clearTimeout(this._thumbnailTimer);
        this._thumbnailTimer = null;
        if (this.props.autoPlay == true) {
          this.play();
        }
      }
      this.setState({ hovering: false });
    },

    renderBullets: function renderBullets() {
      if (this.props.showBullets) {
        return _react2['default'].createElement(
          'div',
          { className: 'image-gallery-container__content__bullets-container' },
          _react2['default'].createElement(BulletsContainer, {
            numberOfBullets: this.props.items.length,
            onClick: this.onBulletChanged,
            currentIndex: this.state.currentIndex
          })
        );
      }
    },

    renderSlides: function renderSlides() {
      return _react2['default'].createElement(
        'div',
        { className: 'image-gallery-container__content__slides-container' },
        _react2['default'].createElement(SlidesContainer, {
          items: this.props.items,
          currentIndex: this.state.currentIndex,
          server: this.props.server,
          lazyLoad: this.props.lazyLoad,
          onSwipedRight: this.swipePrev,
          onSwipedLeft: this.swipeNext,
          showNav: this.props.showNav,
          showDescription: this.props.showDescription,
          infinite: this.props.infinite
        })
      );
    },

    renderIndex: function renderIndex() {
      if (this.props.showIndex) {
        return _react2['default'].createElement(GalleryIndex, {
          index: this.state.currentIndex,
          total: this.props.items.length,
          indexSeparator: this.props.indexSeparator
        });
      }
    },

    renderThumbnails: function renderThumbnails() {
      if (this.props.showThumbnails) {
        return _react2['default'].createElement(
          'div',
          { className: 'image-gallery-container__content__thumbnails-container' },
          _react2['default'].createElement(ThumbnailsContainer, {
            items: this.props.items,
            currentIndex: this.state.currentIndex,
            mouseOver: this.handleMouseOverThumbnails,
            mouseLeave: this.handleMouseLeaveThumbnails,
            onClick: this.onThumbnailChanged
          })
        );
      }
    },

    render: function render() {
      return _react2['default'].createElement(
        'section',
        {
          ref: 'imageGallery',
          className: 'image-gallery-container'
        },
        _react2['default'].createElement(
          'div',
          {
            onMouseOver: this.handleMouseOver,
            onMouseLeave: this.handleMouseLeave,
            className: 'image-gallery-container__content'
          },
          this.renderSlides(),
          this.renderBullets(),
          this.renderIndex(),
          this.renderThumbnails()
        )
      );
    }
  });
}

module.exports = exports['default'];