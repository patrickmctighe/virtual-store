import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function ProductLayout() {

    
        const location = useLocation();
      
        const shouldShowProductList = !location.pathname.startsWith("/products/");
      

  return (
    <div className="productArea">
      
      {shouldShowProductList && (
        <div className="prodTitle"><h1>Products</h1>
      <div className="prodList">
        <div id="prodItems" className="classic">
          <NavLink className="prodLink" to="/products/classic">
            <img
              className="icon"
              src="../src/assets/images/icons/sunIcon.gif"
              alt="sunny"
            />
            Classic Package
          </NavLink>
        </div>
        <div id="prodItems" className="desert">
          <NavLink className="prodLink" to="/products/snowy">
            <img
              className="icon"
              src="../src/assets/images/icons/cactus.gif"
              alt="cactus"
            />
            Wild West Package
          </NavLink>
        </div>
        <div id="prodItems" className="stormy">
          <NavLink className="prodLink" to="/products/stormy">
            <img
              className="icon"
              src="../src/assets/images/icons/stormyIcon.gif"
              alt="storm"
            />
            Stormy package
          </NavLink>
        </div>
        <div id="prodItems" className="windy">
          <NavLink className="prodLink" to="/products/windy">
            <img
              className="icon"
              src="../src/assets/images/icons/windy1.gif"
              alt="windy"
            />
            Windy Package
          </NavLink>
        </div>
        <div id="prodItems" className="garden">
          <NavLink className="prodLink" to="/products/garden">
            <img
              className="icon"
              src="../src/assets/images/icons/gardenIcon.gif"
              alt="garden"
            />
            Garden Package
          </NavLink>
        </div>
        <div id="prodItems" className="beach">
          <NavLink className="prodLink" to="/products/beach">
            <img
              className="icon"
              src="../src/assets/images/icons/beachball.gif"
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
