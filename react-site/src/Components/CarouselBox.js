import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={first} alt="First" />
          <Carousel.Caption>
            <h3>First Image</h3>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={second} alt="Second" />
          <Carousel.Caption>
            <h3>Second Image</h3>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={first} alt="First" />
          <Carousel.Caption>
            <h3>First Image</h3>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
