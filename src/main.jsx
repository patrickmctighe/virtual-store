import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartItemsCountProvider } from "./context/context";
import "./styles/about.css";
import "./styles/cart.css";
import './styles/index.css'

import "./styles/headerAndNav.css";

import "./styles/home.css";



import "./styles/productPages.css";

import "./styles/productsAndIcons.css";

import "./styles/contactPage.css";

import "./styles/mainContainer.css";

import "./styles/fAQ.css";

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
<CartItemsCountProvider>
  <App />
</CartItemsCountProvider>
</React.StrictMode>
);
