import { useState, useEffect } from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { useCartItemsCount } from "../context/context";
export default function Stormy() {
  const [addedToCart, setAddedToCart] = useState(
    localStorage.getItem(`addedToCart_${items[4].name}`) === "true"
  );
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../images/weather-gifs/rain-garden.gif",
    "../images/weather-gifs/stormyBad.gif",
    "../images/weather-gifs/rain-garden.gif",
    "../images/weather-gifs/postWorld2.gif",
  ];

  const { updateCartItemsCount, cartItemsCount } = useCartItemsCount(); // Use the hook from the context


  const imageDisplayTimes = [5000, 300, 1500, 700]; // Time (in milliseconds) for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);
  const item = items[4];
  return (
    <div>
      {" "}
      <div id="packages">
        <h1 className="stormyMobile">Stormy Day Package</h1>
        <div className="productImgandText">
        <div className="imgArea"> <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          /></div>
          <div className="productSpec">
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">TempestGuard Weather Shield:</h4>
              <p className="specExp">
                Experience the power of a storm while staying dry and safe with
                TempestGuard's cutting-edge weather-resistant technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">ThunderRoar Surround Sound:</h4>
              <p className="specExp">
                Hear the rumble and crackle of thunder with ThunderRoar's
                immersive audio simulation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">LightningFlash Visual Effects:</h4>
              <p className="specExp">
                Witness the electrifying beauty of lightning strikes with
                LightningFlash's stunning visual enhancements.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">RainDance Haptic Raindrops:</h4>
              <p className="specExp">
                Feel the touch of raindrops on your skin with RainDance's
                responsive haptic sensation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">GaleForce Wind Simulation:</h4>
              <p className="specExp">
                Experience the rush of wind as a stormy gale sweeps through,
                courtesy of GaleForce's wind simulation technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">DarkSky Visual Ambiance:</h4>
              <p className="specExp">
                Immerse yourself in the dramatic atmosphere of a stormy day with
                DarkSky's captivating visual ambiance.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">AquaScent Storm Aromascape:</h4>
              <p className="specExp">
                Breathe in the invigorating scent of a stormy sea with
                AquaScent's immersive aroma diffusion.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">LightningChase VR Adventure:</h4>
              <p className="specExp">
                Embark on a thrilling virtual reality adventure to chase and
                capture lightning strikes.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Embrace the untamed beauty of nature's fury with our Stormy Day
            Package. Step into a realm where tempestuous skies and electrifying
            atmospheres collide, offering an exhilarating escape from the
            mundane. Immerse yourself in the raw power of the elements, where
            thunderous symphonies and electrifying vistas evoke a sense of awe
            and wonder. Witness the dramatic interplay of nature's wrath and
            beauty with ThunderBurst Illumination, where lightning illuminates
            the sky in breathtaking displays. With TempestSound Orchestration,
            the harmonies of rain and thunder envelop you, creating an auditory
            masterpiece that echoes the chaos and grandeur of the storm. The
            Stormy Day Package encapsulates the essence of nature's majesty and
            unpredictability. Experience the tactile thrill of ElectroTouch
            Haptics, where every raindrop and gust of wind becomes palpable
            against your skin. Engage with the storm's dance through
            LightningStrike Visual Augmentation, where the electric spectacle
            leaves an indelible imprint on your senses. In a world where even
            nature's fury is art, the Stormy Day Package offers a captivating
            respite from the ordinary. It's not just an escape—it's the perfect
            setting for watching your favorite horror movies or losing yourself
            in the pages of a gripping novel. As you navigate this electrifying
            sanctuary, may you find solace in the exhilarating embrace of the
            storm. Let the tempest's ferocity ignite your spirit, reminding you
            that beauty can be found even in the midst of chaos.
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
