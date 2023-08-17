import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages

import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Faq from "./components/Faq";

// import Products from "./components/Products";
//product pages
import Classic from "./productss/Classic";
import Garden from "./productss/Garden";
import Snowy from "./productss/Desert";
import Stormy from "./productss/Stormy";
import Windy from "./productss/Windy";
import Beach from "./productss/Beach";
//layout
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<Faq />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<ProductLayout />}>
        <Route path="classic" element={<Classic />} />
        <Route path="garden" element={<Garden />} />
        <Route path="snowy" element={<Snowy />} />
        <Route path="stormy" element={<Stormy />} />
        <Route path="windy" element={<Windy />} />
        <Route path="beach" element={<Beach />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
