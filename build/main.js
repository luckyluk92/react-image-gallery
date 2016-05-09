'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MainImporter = MainImporter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsImage = require('./components/Image');

var _componentsImage2 = _interopRequireDefault(_componentsImage);

var _componentsBullet = require('./components/Bullet');

var _componentsBullet2 = _interopRequireDefault(_componentsBullet);

var _componentsLeftNav = require('./components/LeftNav');

var _componentsLeftNav2 = _interopRequireDefault(_componentsLeftNav);

var _componentsRightNav = require('./components/RightNav');

var _componentsRightNav2 = _interopRequireDefault(_componentsRightNav);

var _componentsIndex = require('./components/Index');

var _componentsIndex2 = _interopRequireDefault(_componentsIndex);

var _componentsSlideDescription = require('./components/SlideDescription');

var _componentsSlideDescription2 = _interopRequireDefault(_componentsSlideDescription);

var _componentsThumbnail = require('./components/Thumbnail');

var _componentsThumbnail2 = _interopRequireDefault(_componentsThumbnail);

var _componentsThumbnailsContainer = require('./components/ThumbnailsContainer');

var _componentsThumbnailsContainer2 = _interopRequireDefault(_componentsThumbnailsContainer);

var _componentsBulletsContainer = require('./components/BulletsContainer');

var _componentsBulletsContainer2 = _interopRequireDefault(_componentsBulletsContainer);

var _componentsSlide = require('./components/Slide');

var _componentsSlide2 = _interopRequireDefault(_componentsSlide);

var _componentsSlidesContainer = require('./components/SlidesContainer');

var _componentsSlidesContainer2 = _interopRequireDefault(_componentsSlidesContainer);

var _componentsImageGallery = require('./components/ImageGallery');

var _componentsImageGallery2 = _interopRequireDefault(_componentsImageGallery);

// basic components
var BasicComponents = {
  Image: _componentsImage2['default'],
  Bullet: _componentsBullet2['default'],
  RightNav: _componentsRightNav2['default'],
  LeftNav: _componentsLeftNav2['default'],
  Index: _componentsIndex2['default'],
  SlideDescription: _componentsSlideDescription2['default']
};

exports.BasicComponents = BasicComponents;

function MainImporter() {
  var dependencies = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var Thumbnail = undefined,
      ThumbnailsContainer = undefined,
      BulletsContainer = undefined,
      Slide = undefined,
      SlidesContainer = undefined;
  var ImageComponent = dependencies.Image || _componentsImage2['default'];
  var BulletComponent = dependencies.Bullet || _componentsBullet2['default'];
  var LeftNavComponent = dependencies.LeftNav || _componentsLeftNav2['default'];
  var RightNavComponent = dependencies.RightNav || _componentsRightNav2['default'];
  var IndexComponent = dependencies.Index || _componentsIndex2['default'];
  var SlideDescriptionComponent = dependencies.SlideDescription || _componentsSlideDescription2['default'];

  if (dependencies.ThumbnailImporter) {
    Thumbnail = dependencies.ThumbnailImporter(ImageComponent);
  } else {
    Thumbnail = (0, _componentsThumbnail2['default'])(ImageComponent);
  }

  if (dependencies.ThumbnailsContainerImporter) {
    ThumbnailsContainer = dependencies.ThumbnailsContainerImporter(Thumbnail);
  } else {
    ThumbnailsContainer = (0, _componentsThumbnailsContainer2['default'])(Thumbnail);
  }

  if (dependencies.BulletContainerImporter) {
    BulletsContainer = dependencies.BulletsContainerImporter(BulletComponent);
  } else {
    BulletsContainer = (0, _componentsBulletsContainer2['default'])(BulletComponent);
  }

  if (dependencies.SlideImporter) {
    Slide = dependencies.SlideImporter;
  } else {
    Slide = (0, _componentsSlide2['default'])(ImageComponent, SlideDescriptionComponent);
  }

  if (dependencies.SlidesContainerImporter) {
    SlidesContainer = dependencies.SlidesContainerImporter(Slide, LeftNavComponent, RightNavComponent);
  } else {
    SlidesContainer = (0, _componentsSlidesContainer2['default'])(Slide, LeftNavComponent, RightNavComponent);
  }

  return (0, _componentsImageGallery2['default'])(SlidesContainer, ThumbnailsContainer, BulletsContainer, IndexComponent);
}