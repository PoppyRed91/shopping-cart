import { Outlet, Route, Router, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import "./App.css"
import HomePage from './Pages/HomePage';

function App() {
  const cartImage = require("./Images/duck-cart.jpg")

  const [cartItems, setCartItems] = useState<Object[]>([]);
  const [itemsInCart, setItemsInCart] = useState(0);

  function handleClick(src: string, name: string, price: number) {
    const item = [name, src, price];
    let currentItems = cartItems;
    currentItems.push(item);
    setCartItems(currentItems);
    setItemsInCart(currentItems.length);
    console.log("Items in cart: " + cartItems.length);
    console.log("Added item: " + name);
    
  }
  
  let productItems: Object[] = [
    {
        name: "T-Shirt", 
        src: "shirt.jpg",
        price: 150,
        quantity: 0,
    },
    {
        name: "Pants",
        src: "pants.jpg",
        price: 250,
        quantity: 0,
    },
    {
        name: "Hat",
        src: "hat.jpg",
        price: 150,
        quantity: 0,
    },
    
    {
        name: "Scarf",
        src: "scarf.jpg",
        price: 250,
        quantity: 0,
    },
    
    {
        name: "Shoes",
        src: "shoes.jpg",
        price: 350,
        quantity: 0,
    },
    {
        name: "Watch",
        src: "watch.jpg",
        price: 450,
        quantity: 0,
    }
  ]



  return (
    <>
      <div className="navbar">
        
        <Link className='title' to="">
          <h3>Duck Shop</h3>
        </Link>
        
        
        <Link className='duck-cart' to="cart">
          <p className='duck-cart-quantity'>{`Items in cart: ${itemsInCart}`}</p>
          <img className='duck-cart-image' src={cartImage}></img>
          
        </Link>

      </div>
      
        <Routes>
          <Route
          index
          element={<HomePage products={productItems} onItemClick={handleClick}/>}
          />
          <Route
          path='/product/:id'
          element={<ProductPage/>}
          />
          <Route
          path='/cart'
          element={<CartPage/>}
          />
        </Routes>
    </>
  );
}

export default App;
