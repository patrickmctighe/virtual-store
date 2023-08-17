import { useState, useEffect } from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { useCartItemsCount } from "../context/context";

export default function Beach() {
  const [addedToCart, setAddedToCart] = useState(
    localStorage.getItem(`addedToCart_${items[0].name}`) === "true"
  );
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../images/weather-gifs/beach.gif",
    "../images/weather-gifs/beachBad.gif",
  ];
  const { updateCartItemsCount, cartItemsCount } = useCartItemsCount(); // Use the hook from the context

  const imageDisplayTimes = [7000, 750]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);

  const item = items[0];

  return (
    <div>
      {" "}
      <div id="packages">
        <h1 className="beachMobile">Beach Day Package</h1>
        <div className="productImgandText">
        <div className="imgArea"> <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          /></div>
          <div className="productSpec">
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">SunBlast Solar Protection:</h4>
              <p className="specExp">
                Experience the beach's warmth without the sunburn, thanks to
                SunBlast's advanced UV shielding.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">AquaBreeze Cooling System:</h4>
              <p className="specExp">
                Stay refreshingly cool under the sun with AquaBreeze's
                revolutionary micro-mist technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">WaveSync Beach Ambience:</h4>
              <p className="specExp">
                Immerse yourself in the soothing sounds of the waves with
                WaveSync's lifelike beach audio.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">SandyTouch Haptic Sensation:</h4>
              <p className="specExp">
                Feel the sand between your toes through the innovative
                SandyTouch tactile system.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">SeagullVision Visual Enhancement:</h4>
              <p className="specExp">
                Enhance your beach view with SeagullVision's precision visual
                augmentation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">CoastalBreeze Aromascape:</h4>
              <p className="specExp">
                Imbibe the invigorating scent of the coast with CoastalBreeze's
                immersive aroma diffusion.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">TidalZone Wave Simulation:</h4>
              <p className="specExp">
                Feel the ocean's rhythm through TidalZone's realistic wave
                simulation.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">ShellSeeker's Companion:</h4>
              <p className="specExp">
                Stroll the virtual shoreline with your loyal ShellSeeker pet by
                SynthPet Labs.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Step into a world transformed by the passage of time with our Beach
            Day Package. Designed to evoke the echoes of sun-kissed shores and
            carefree moments, this package offers a glimpse into the nostalgia
            of days gone by. The Beach Day Package invites you to relive the joy
            of warm sunrays, gentle breezes, and the soothing rhythm of waves,
            all within the embrace of a world that has evolved. Under the
            comforting embrace of SunBlast Solar Protection, rediscover the
            sensation of sunlight on your skin, as if a memory from long ago.
            The AquaBreeze Cooling System recreates the breezy respite of a
            coastal escape, transporting you to a sanctuary where relaxation
            knows no bounds. With ShellSeeker's Companion by SynthPet Labs as
            your virtual beachside companion, experience the camaraderie of
            simpler times. Every detail of the Beach Day Package is crafted to
            rekindle the essence of a cherished memory. Feel the soft touch of
            sand, hear the gentle rustle of palm leaves, and savor the briny
            scent of the ocean air. It's an invitation to escape the demands of
            today and embrace the serenity of yesterday. Amidst the challenges
            of the modern world, the Beach Day Package serves as a reminder of
            the beauty and tranquility that endure across generations. As you
            explore this curated experience, let the waves of nostalgia wash
            over you, offering a temporary respite from the tumult of the
            present.
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
