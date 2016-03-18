import React from 'react'
import ReactDOM from 'react-dom'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import * as ImageGalleryImporter from '../src/javascripts/main'

let ImageGallery = ImageGalleryImporter.MainImporter();

const App = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState() {
    return {
      isPlaying: false,
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      showThumbnails: true,
      showNav: true,
      showDescription: false,
      infinite: true,
      slideInterval: 4000
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval) {
      // refresh setInterval
      this._pauseSlider()
      this._playSlider()
    }
  },

  _pauseSlider() {
    if (this._imageGallery) {
      this._imageGallery.pause()
      this.setState({isPlaying: false})
    }
  },

  _playSlider() {
    if (this._imageGallery) {
      this._imageGallery.play()
      this.setState({isPlaying: true})
    }
  },

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails'
      },
      {
        original: 'http://lorempixel.co/1000/600/nature/2/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/4/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/4/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/5/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/5/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/6/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/6/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/7/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/7/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/7/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/7/'
      },
      {
        original: 'http://lorempixel.co/1000/600/nature/8/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/8/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/9/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/9/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/10/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/nature/10/'
      },
      {
        original: 'http://lorempixel.com/1000/600/sports/10/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/sports/10/'
      },
      {
        original: 'http://lorempixel.com/1000/600/sports/9/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/sports/9/'
      },
      {
        original: 'http://lorempixel.com/1000/600/sports/8/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/sports/8/'
      },
      {
        original: 'http://lorempixel.com/1000/600/sports/7/',
        defaultSrc: 'http://placehold.it/1000x600',
        thumbnail: 'http://lorempixel.com/250/150/sports/7/'
      }
    ]

    return (

      <section className='app'>
        <ImageGallery
          ref={(i) => this._imageGallery = i}
          items={images}
          lazyLoad={false}
          showBullets={this.state.showBullets}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          showDescription={this.state.showDescription}
          infinite={this.state.infinite}
          slideInterval={parseInt(this.state.slideInterval)}
          autoPlay={this.state.isPlaying}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
        />

        <div className='app-sandbox'>

          <h2> Available Props </h2>

          <ul>
            <li>
              <a
                className={'app-button ' + (this.state.isPlaying ? 'active' : '')}
                onClick={this._playSlider}>
                Play
              </a>
            </li>
            <li>
            <a
              className={'app-button ' + (!this.state.isPlaying ? 'active' : '')}
              onClick={this._pauseSlider}>
              Pause
            </a>
            </li>
            <li>
              <div>slide interval</div>
              <input
                type='text'
                placeholder='SlideInterval'
                valueLink={this.linkState('slideInterval')}/>
            </li>
            <li>
              <input
                id='show_bullets'
                type='checkbox'
                checkedLink={this.linkState('showBullets')}/>
                <label htmlFor='show_bullets'>show bullets?</label>
            </li>
            <li>
              <input
                id='show_thumbnails'
                type='checkbox'
                checkedLink={this.linkState('showThumbnails')}/>
                <label htmlFor='show_thumbnails'>show thumbnails?</label>
            </li>
            <li>
              <input
                id='show_navigation'
                type='checkbox'
                checkedLink={this.linkState('showNav')}/>
                <label htmlFor='show_navigation'>show navigation?</label>
            </li>
            <li>
              <input
                id='show_index'
                type='checkbox'
                checkedLink={this.linkState('showIndex')}/>
                <label htmlFor='show_index'>show index?</label>
            </li>
            <li>
              <input
                id='show_desc'
                type='checkbox'
                checkedLink={this.linkState('showDescription')}/>
                <label htmlFor='show_desc'>show descriptions?</label>
            </li>
            <li>
              <input
                id='infinite'
                type='checkbox'
                checkedLink={this.linkState('infinite')}/>
                <label htmlFor='infinite'>infinite?</label>
            </li>
            <li>
              <input
                id='slide_on_thumbnail_hover'
                type='checkbox'
                checkedLink={this.linkState('slideOnThumbnailHover')}/>
                <label htmlFor='slide_on_thumbnail_hover'>slide on thumbnail hover?</label>
            </li>
          </ul>

        </div>
      </section>
    )
  }

})

ReactDOM.render(<App/>, document.getElementById('container'))

