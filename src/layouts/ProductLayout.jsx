import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ProductLayout() {

    
        const location = useLocation();
      
        const shouldShowProductList = !location.pathname.startsWith("/products/");
      
        const [currentImage, setCurrentImage] = useState(0);
        const images = [
            "../images/icons/gardenIcon.gif",
          "../images/icons/poison.gif",
        ];
      
        const imageDisplayTimes = [7000, 750]; // Time (in milliseconds) for each image
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, imageDisplayTimes[currentImage]);
      
          return () => {
            clearInterval(interval);
          };
        }, [images.length, currentImage]);

  return (
    <div className="productArea">
      
      {shouldShowProductList && (
        <div className="prodTitle"><h1>Products</h1>
      <div className="prodList">
        <div id="prodItems" className="classic">
          <NavLink className="prodLink" to="/products/classic">
            <img
              className="icon"
              src="../images/icons/sunIcon.gif"
              alt="sunny"
            />
            Classic Package
          </NavLink>
        </div>
        <div id="prodItems" className="desert">
          <NavLink className="prodLink" to="/products/snowy">
            <img
              className="icon"
              src="../images/icons/cactus.gif"
              alt="cactus"
            />
            Wild West Package
          </NavLink>
        </div>
        <div id="prodItems" className="stormy">
          <NavLink className="prodLink" to="/products/stormy">
            <img
              className="icon"
              src="../images/icons/stormyIcon.gif"
              alt="storm"
            />
            Stormy package
          </NavLink>
        </div>
        <div id="prodItems" className="windy">
          <NavLink className="prodLink" to="/products/windy">
            <img
              className="icon"
              src="../images/icons/windy1.gif"
              alt="windy"
            />
            Windy Package
          </NavLink>
        </div>
        <div id="prodItems" className="garden">
          <NavLink className="prodLink" to="/products/garden">
            <img
              className="icon"
              src={images[currentImage]}
    
              alt="garden"
            />
            Garden Package
          </NavLink>
        </div>
        <div id="prodItems" className="beach">
          <NavLink className="prodLink" to="/products/beach">
            <img
              className="icon"
              src="../images/icons/beachball.gif"
              alt="beachball"
            />
            Beach Day Package
          </NavLink>
        </div>
      </div>
      </div>
      )}
      <Outlet />
    </div>
  );
}
