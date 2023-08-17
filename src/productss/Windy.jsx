import { useState, useEffect } from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { useCartItemsCount } from "../context/context";
export default function Windy() {
  const [addedToCart, setAddedToCart] = useState(
    localStorage.getItem(`addedToCart_${items[5].name}`) === "true"
  );
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../images/weather-gifs/windyDay.gif",
    "../images/weather-gifs/windyBad.gif",
    "../images/weather-gifs/windyDay.gif",
    "../images/weather-gifs/windyBad.gif",
  ];

  const { updateCartItemsCount, cartItemsCount } = useCartItemsCount(); // Use the hook from the context


  const imageDisplayTimes = [5000, 350, 1500, 1000]; // Time (in milliseconds) for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);
  const item = items[5];

  return (
    <div>
      {" "}
      <div id="packages">
        <h1 className="windyMobile">Windy Day Package</h1>
        <div className="productImgandText">
        <div className="imgArea"> <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          /></div>
          <div className="productSpec">
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">ZephyrGuard Wind Shield:</h4>
              <p className="specExp">
                Experience the exhilaration of a windy day without feeling the
                discomfort, thanks to ZephyrGuard's advanced wind-deflecting
                technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">BreezeTune Atmospheric Sounds:</h4>
              <p className="specExp">
                Immerse yourself in the symphony of rustling leaves and
                whistling winds with BreezeTune's authentic wind sounds.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">WindWhisper Visual Effects:</h4>
              <p className="specExp">
                Witness the dance of swirling leaves and ripples in the air with
                WindWhisper's captivating visual enhancements.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">AirFlow Haptic Sensation:</h4>
              <p className="specExp">
                Feel the rush of wind against your skin with AirFlow's precise
                haptic feedback technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">GustRider Wind Simulation:</h4>
              <p className="specExp">
                Experience the thrill of wind gusts as they swirl around you,
                courtesy of GustRider's dynamic wind simulation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">WhirlSky Visual Ambiance:</h4>
              <p className="specExp">
                Immerse yourself in the energy of a windy day with WhirlSky's
                dynamic visual ambiance.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">AeroScent Air Infusion:</h4>
              <p className="specExp">
                Inhale the invigorating scent of crisp, fresh air with
                AeroScent's aroma diffusion technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">KiteFlight Sky Adventure:</h4>
              <p className="specExp">
                Soar through the virtual sky with a lifelike kite-flying
                adventure, brought to life by KiteFlight's simulation.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Evoke a sense of untamed freedom and kinetic energy with our Windy
            Day Package. Step into a world where the wind's playful dance
            intertwines with the spirit of adventure, offering an exhilarating
            escape into the heart of nature's embrace. Immerse yourself in the
            gusts and breezes that carry stories of distant lands and forgotten
            tales. Witness the enchanting spectacle of WindWhirl Choreography,
            where airborne wonders twirl and spin in an intricate ballet. With
            BreezeTunes Harmony, the melodies of wind's whispers entwine with
            your senses, creating a symphony of sounds that resonate with the
            rhythm of nature. The Windy Day Package captures the essence of
            nature's ever-changing rhythm. Experience the tactile thrill of
            ZephyrTouch Haptics, where you can feel the wind's gentle caress and
            exhilarating gusts against your skin. Engage in the dance of the
            elements with GaleForce Visual Augmentation, where the world
            transforms into a canvas for the wind's artistry. In a world where
            even the air is a storyteller, the Windy Day Package offers a
            sanctuary of liberation and inspiration. It's not just an
            experience—it's a canvas for your imagination, a playground for
            dreams carried on the wind. As you navigate this spirited sanctuary,
            may you find solace in the boundless energy of the wind, reminding
            you that life's most precious moments are often found in the
            whispers of the breeze.
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
