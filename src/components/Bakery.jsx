import React from "react";

export default function Bakery() {
  const bakeryItems = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      id: 2,
      name: "Croissant",
      price: "$2.99",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    },
    {
      id: 3,
      name: "Donuts",
      price: "$5.49",
      img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
    },
    {
      id: 4,
      name: "Cupcakes",
      price: "$6.99",
      img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    },
    {
      id: 5,
      name: "Bread Loaf",
      price: "$3.99",
      img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      price: "$3.49",
      img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15",
    },
    {
      id: 7,
      name: "Cookies",
      price: "$4.99",
      img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    },
    {
      id: 8,
      name: "Cheese Cake",
      price: "$10.99",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Bakery Items
          </h2>
          <p className="text-gray-500 mt-2">
            Freshly baked goods just for you 🍞
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bakeryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-pink-600 font-bold">
                    {item.price}
                  </span>

                  <button className="bg-pink-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-pink-700">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
