import React from "react";

function Cart({
  cartItems,
  RemoveFromCart,
  IncreaseQuantity,
  DecreaseQuantity,
}) {
  // Calculate total with 10% discount
  const CalculateTotalWithDiscount = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = total * 0.1;
    return (total - discount).toFixed(2);
  };

  return (
    <div className="cart">
      <h1 className="text-3xl font-bold text-center my-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div className="container mx-auto py-6 px-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-6"
            >
              {/* Image */}
              <div className="w-full sm:w-1/6 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Product Information */}
              <div className="flex-1 flex flex-col items-center sm:flex-row justify-between w-full mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 font-semibold">${item.price}</p>
                </div>

                <div className="flex flex-col items-center sm:items-start sm:ml-6">
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity Controls and Remove Button */}
              <div className="flex items-center mt-4 sm:mt-0 sm:ml-6">
                {/* Quantity Buttons */}
                <div className="flex items-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-l-md hover:bg-blue-600"
                    onClick={() => DecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-r-md hover:bg-blue-600"
                    onClick={() => IncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-red-600"
                  onClick={() => RemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Calculation */}
          <div className="flex justify-end py-4 text-lg font-semibold">
            <p>Total after 10% discount: ${CalculateTotalWithDiscount()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
