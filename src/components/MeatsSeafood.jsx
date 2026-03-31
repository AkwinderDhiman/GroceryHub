import React from "react";

export default function MeatsSeafood() {
  const items = [
    {
      id: 1,
      name: "Fresh Salmon",
      price: "$14.99",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
      id: 2,
      name: "Chicken Breast",
      price: "$9.49",
      img: "https://images.unsplash.com/photo-1604908811797-1f1d3b9c5fbd",
    },
    {
      id: 3,
      name: "Raw Beef Steak",
      price: "$19.99",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      id: 4,
      name: "Shrimps",
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
    },
    {
      id: 5,
      name: "Crab",
      price: "$15.99",
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    },
    {
      id: 6,
      name: "Tuna Fish",
      price: "$13.49",
      img: "https://images.unsplash.com/photo-1514517220039-3c89d6c2c9a4",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meats & Seafood
          </h2>
          <p className="text-gray-500 mt-2">
            Premium quality fresh meat & seafood delivered to you 🐟
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-red-600 font-bold">
                    {item.price}
                  </span>

                  <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition">
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
