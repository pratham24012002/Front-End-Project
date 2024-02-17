import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
          <Carousel.Item>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0e138e81b7c37406.jpg?q=20" alt="iphone" text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/229cb9ed6b7b32a4.jpg?q=20" alt="second" text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/229cb9ed6b7b32a4.jpg?q=20" alt="second" text="Second slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default ImageSlider;
