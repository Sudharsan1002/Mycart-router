import { NavLink, Route, Routes } from "react-router-dom";

// import Appheader from './Components/Basics/Appheader'
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import myImage from "./assets/myImage.png";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([])
  //function for adding to cart with checking the item already in the cart
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const alreadyAdded = cartItems.some((item) => item.id === product.id);

    if (alreadyAdded) {
      alert("Item already added to the cart"); // Display alert if item is already in the cart
    } else {
      // Add product with initial quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //Create function to remove item from cart
    const RemoveFromCart = (product) => {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
    }
  //create function to increase quantity
    const IncreaseQuantity = (product) => {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    };
    
  //create function to decrease quantity
   const DecreaseQuantity = (product) => {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    };
  

  
  return (
    <div className="container mx-auto  ">
      <div className="flex justify-around items-center py-6 ">
        <h1 className="text-4xl font-bold italic font-serif  bg-gradient-to-tr from-blue-600 to-amber-600 to-50% bg-clip-text text-transparent">
          MY CART
        </h1>
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg font-semibold font-serif italic"
                    : "text-lg font-semibold font-serif italic text-orange-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg font-semibold font-serif italic"
                    : "text-lg font-semibold font-serif italic text-orange-300"
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-gray-500"
                }
              >
                <div className="w-10 h-auto relative">
                  <img src={myImage} />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </div>
                  
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart"
          element=
          {<Cart
            cartItems={cartItems}
            RemoveFromCart={RemoveFromCart}
            IncreaseQuantity={IncreaseQuantity}
            DecreaseQuantity={DecreaseQuantity} />} />
        <Route path="/products" element=  {<Products handleAddToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
