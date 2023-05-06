import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      indicators={false}
      interval={10000}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="banner-background">
        <div className="banner">
          <div className="banner2 container d-flex">
            <div className="first-order">
              <h2 className="  banner-h2">Great Selection of</h2>
              <hr className="home-hr " />
              <h1 className="product-name-text text-center">
                <span className="h1-text-highlight-b1">
                  -DESKTOP-
                  <br />
                  COMPUTER CASING
                </span>
              </h1>
              <hr className="home-hr" />
              <p className="product-detail text-center">
                Good Price & Best Deals
              </p>
              <Link as={Link} to="/allproducts">
                <button className="banner-button m-2">BROWSE HERE</button>
              </Link>
            </div>
            <div className=" second-order">
              <img
                className="product-image"
                src="https://i.ibb.co/0XNPpfv/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="banner-background-2">
        <div className="banner">
          <div className="banner2 container d-flex">
            <div className="first-order">
              <h2 className="  banner-h2">FIRST IS A NEW!?</h2>
              <hr className="home-hr" />
              <h1 className="product-name-text text-center">
                <span className="h1-text-highlight-b1">
                  -FLAG-SHIP-
                  <br />
                  MODEL
                </span>
              </h1>
              <hr className="home-hr" />
              <p className="product-detail text-center">
                INTERCHANGEABLE PARTS WITH WARRANTY
              </p>
              <Link as={Link} to="/allproducts">
                <button className="banner-button my-2">BROWSE HERE</button>
              </Link>
            </div>
            <div className=" second-order">
              <img
                className="product-image"
                src="https://i.ibb.co/0XNPpfv/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="banner-background-3">
        <div className="banner">
          <div className="banner2 container d-flex">
            <div className="first-order">
              <h2 className="  banner-h2">Easier Than Connecting A Cable</h2>
              <hr className="home-hr" />
              <h1 className="product-name-text text-center">
                <span className="h1-text-highlight-b1">
                  -GAMING-CASING-
                  <br />
                  COLLECTION
                </span>
              </h1>
              <hr className="home-hr" />
              <p className="product-detail text-center">
                Enjoy All The Gaming In Your Desktop
              </p>
              <Link as={Link} to="/allproducts">
                <button className="banner-button my-2">BROWSE HERE</button>
              </Link>
            </div>
            <div className=" second-order">
              <img
                className="product-image"
                src="https://i.ibb.co/0XNPpfv/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
