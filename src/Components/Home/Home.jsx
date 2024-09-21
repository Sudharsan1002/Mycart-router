import React from 'react'

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-amber-100 to-50% gap-24 ">
      <h1 className="text-4xl font-bold font-serif italic bg-gradient-to-tr from-blue-600 to-amber-600 to-50% bg-clip-text text-transparent">
        Welcome to MyCart
      </h1>
      <p className="text-4xl font-bold font-serif italic bg-gradient-to-tr from-blue-600 to-amber-600 to-50% bg-clip-text text-transparent">
        {" "}
        Let's Go Shoppy!
      </p>
    </div>
  );
}

export default Home