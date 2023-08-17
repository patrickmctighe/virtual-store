import { useState, useEffect } from "react";

import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { useCartItemsCount } from "../context/context";
export default function Snowy() {
  const [addedToCart, setAddedToCart] = useState(
    localStorage.getItem(`addedToCart_${items[2].name}`) === "true"
  );
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../images/weather-gifs/desertParadise.gif",
    "../images/weather-gifs/desert_trash.gif",
    "../images/weather-gifs/desertParadise.gif",
    "../images/weather-gifs/desert_trash.gif",
  ];

  const { updateCartItemsCount, cartItemsCount } = useCartItemsCount(); // Use the hook from the context


  const imageDisplayTimes = [5000, 300, 1500, 1000]; // Time (in milliseconds) for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);
  const item = items[2];
  return (
    <div>
      {" "}
      <div id="packages">
        <h1>Wild West Package</h1>
        <div className="productImgandText">
        <div className="imgArea"> <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          /></div>
          <div className="productSpec">
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">DustGuard Atmosphere Filtering:</h4>
              <p className="specExp">
                Enjoy the rugged charm of the Wild West without inhaling the
                dust, thanks to DustGuard's advanced air purification.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">SunsetGlow Lighting Enhancement:</h4>
              <p className="specExp">
                Experience the iconic hues of a Wild West sunset with
                SunsetGlow's immersive lighting technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">HorseTrail Echoes:</h4>
              <p className="specExp">
                Hear the distant sounds of horse hooves on the trail with
                HorseTrail's audio ambiance.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">SaddleRide Haptic Sensation:</h4>
              <p className="specExp">
                Feel the gallop of a trusty steed beneath you through the
                innovative SaddleRide tactile system.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">CactusView Augmented Landscapes:</h4>
              <p className="specExp">
                Witness the Wild West's beauty through the eyes of the past with
                CactusView's historical overlays.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">Campfire Tales Aural Journey:</h4>
              <p className="specExp">
                Listen to legendary tales by a virtual campfire, brought to life
                by Campfire Tales' captivating narratives.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">DesertWinds Aromascape:</h4>
              <p className="specExp">
                Immerse yourself in the authentic aroma of the desert with
                DesertWinds' scent diffusion.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">Saloon Showdown Duel Simulation:</h4>
              <p className="specExp">
                Test your quick draw skills in a virtual Saloon Showdown,
                complete with realistic duel mechanics.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Embark on a journey into a world reborn, where the arid wastelands
            have given way to a breathtaking tapestry of life's resurgence. Our
            Wild West Package invites you to wander through a realm transformed,
            where the resilient spirit of the old West meets the vibrant bloom
            of renewal. Immerse yourself in a landscape that weaves the whispers
            of the past with the vibrant palette of nature's renaissance. Under
            the amber embrace of SunsetGlow Lighting Enhancement, the horizon
            comes alive with a radiant promise, reminiscent of the hues that
            once kissed the desert sky. With HorseTrail Echoes, the rhythmic
            hoofbeats tell the tale of a reborn landscape, where cacti stand
            tall and tumbleweeds dance to the howl of the desert wind. The Wild
            West Package is an ode to the metamorphosis of time, a tribute to
            the synergy between legacy and revival. Feel the pulse of resurgence
            with the SaddleRide Haptic Sensation, each stride echoing the
            transformation that surrounds you. Witness the harmonious
            coexistence of yesterday and today in CactusView Augmented
            Landscapes, where the ghosts of history blend seamlessly with the
            vibrancy of renewal. In a world where nature reclaims what was lost,
            the Wild West Package invites you to be a witness to its symphony of
            transformation. As you traverse this dynamic interplay of past and
            present, allow the stark beauty of the desert's rebirth to kindle a
            renewed sense of wonder, where hope flourishes in every gust of the
            desert breeze.
          </p>
          <div className="priceAndAdd">
            <p className="price">&#9763; {item.priceScrap} / 1 Day</p>
            {addedToCart ? (
               <p className="inCartText">Added to Your Cart</p>
            ) : (
              <button
              className="cartButton"
              onClick={() => {addToCart(item, setAddedToCart); 
                  updateCartItemsCount(cartItemsCount + 1);}}
            >
              Add to Cart
            </button>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
