import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: Number.parseInt(event.target.dataset.index),
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div class="carousel">
        <img src={images[active]} alt="animal" />
        <div class="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt="animal thimbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
