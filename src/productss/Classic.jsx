import React, { useState, useEffect } from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { decreaseQt } from "../functions/decreaseQt";
import { increaseQt } from "../functions/increaseQt";
export default function Classic() {
    const [addedToCart, setAddedToCart] = useState(
        localStorage.getItem(`addedToCart_${items[1].name}`) === "true"
      );
   
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../src/assets/images/weather-gifs/classicDay.gif",
    "../src/assets/images/weather-gifs/sunnyday1.gif",
    "../src/assets/images/weather-gifs/postWorld.gif",
    "../src/assets/images/weather-gifs/sunnyday1.gif",
    "../src/assets/images/weather-gifs/postWorld.gif",
  ];

  const imageDisplayTimes = [3000, 2000, 500, 1000, 500]; // Time (in milliseconds) for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);
  const item = items[1];

  return (
    <div>
      {" "}
      <div id="packages">
        <h1>Classic Package</h1>
        <div className="productImgandText">
          <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          />
             <div className="productSpec">
                <h2>Specifications</h2>
            <ul>
              <ul>
                dsfds<li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
              <ul>
                dsfds<li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
              <ul>
                dsfds<li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
            </ul>
          </div>
      
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
        <p className="productText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {addedToCart ? (
          <h4>Added to your cart</h4>
        ) : (
          <button className="cartButton" onClick={() => addToCart(item, setAddedToCart)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
    </div>
  );
}


