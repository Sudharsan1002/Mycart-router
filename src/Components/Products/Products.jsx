import React, { useEffect, useState } from 'react'


function Products({ handleAddToCart }) {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setproducts(data);
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    };
    getproducts();
  }, []);

  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold py-6 ">Products</h1>
        <hr className="w-3/4 border-2 border-red-500" />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Error: {error.message}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <div className='flex flex-col sm:flex sm:flex-row'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 ">
                  View Details
                      </button>
                    <div className='border-2 border-slate-200'></div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 "
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;