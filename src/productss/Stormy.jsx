import{useState, useEffect} from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
export default function Stormy() {  
    const [addedToCart, setAddedToCart] = useState(
        localStorage.getItem(`addedToCart_${items[4].name}`) === "true"
      );
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      "../src/assets/images/weather-gifs/rain-garden.gif",
      "../src/assets/images/weather-gifs/stormyBad.gif",
      "../src/assets/images/weather-gifs/rain-garden.gif",
      "../src/assets/images/weather-gifs/postWorld2.gif",

    ];
  
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
          <h1>Stormy Day Package</h1>
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