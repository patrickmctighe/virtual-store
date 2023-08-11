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
    "../src/assets/images/weather-gifs/classicDay.gif",
    "../src/assets/images/weather-gifs/postWorld.gif",
    "../src/assets/images/weather-gifs/classicDay.gif",
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
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">FilterCorp Air Filtration:</h4>
              <p className="specExp">
                Ensuring every breath of air is pure and invigorating.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">ShieldTech Innovations:</h4>
              <p className="specExp">
                Experience the warmth of the sun without its harmful radiation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">EchoTunes Ambient Soundscapes:</h4>
              <p className="specExp">
                Envelop yourself in harmonious melodies that complement nature's
                symphony.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">
                GroundSense Haptic Feedback by SenseTech Dynamics:
              </h4>
              <p className="specExp">
                Feel the world beneath you like never before.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">OmniHoloTech:</h4>
              <p className="specExp">
                Engage with nature like never before through interactive
                holographic projections.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">EcoScape Integration:</h4>
              <p className="specExp">
                Experience the environment authentically through holographic
                scents by EcoScape.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">AquaTech Solutions:</h4>
              <p className="specExp">
                Raindrops, purified to perfection, grace your skin with
                AquaTech's touch.
              </p>
            </div>
            <div className="specItem">
              <h4 className="specTitle">ChromaSphere Dynamics:</h4>
              <p className="specExp">
                The interplay of light and rain becomes an enchanting spectacle
                with ChromaSphere's expertise.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Introducing the "Classic Package" by Climate Change-A-Roo – a
            timeless masterpiece designed to whisk you away from the relentless
            default weather into a world of unparalleled comfort. Step into a
            classic sunny day, where the temperature is perfectly balanced and
            the atmosphere invites pure relaxation. Bask in the gentle warmth of
            the sun's embrace as you stroll through lush landscapes, all while
            the possibilities of the day stretch before you. And as the
            afternoon sun begins to mellow, experience the enchantment of a
            light rain shower. Each drop is a treasure, meticulously purified
            for your enjoyment. Imagine walking your genetically modified
            EvoDog, their playful steps echoing in the presence of the rain's
            melody. Witness the interplay of golden sunlight and soothing rain,
            a symphony that rekindles a sense of wonder within you.
          </p>
          <div className="priceAndAdd">
            <p className="price">&#9763; {item.priceScrap} / 1 Day</p>
            {addedToCart ? (
               <p className="inCartText">Added to Your Cart</p>
            ) : (
              <button
                className="cartButton"
                onClick={() => addToCart(item, setAddedToCart)}
              >
                Add to Cart
              </button>
            )}{" "}
          </div>
          <p>*evoDog not included</p>
        </div>
      </div>
    </div>
  );
}
