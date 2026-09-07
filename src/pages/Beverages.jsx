import React from "react";
import ProductCard from "../components/product/ProductCard";

export default function Beverages() {
  const drinks = [
    {
      id: 21,
      name: "Fresh Orange Juice",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    },
    {
      id: 22,
      name: "Cold Coffee",
      price: "$3.49",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      id: 23,
      name: "Green Smoothie",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
    },
    {
      id: 24,
      name: "Strawberry Shake",
      price: "$4.49",
      image: "https://images.unsplash.com/photo-1497534446932-c925b458314e",
    },
    {
      id: 25,
      name: "Lemonade",
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1524594154908-edd1b1d5d06d",
    },
    {
      id: 26,
      name: "Iced Tea",
      price: "$3.29",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Beverages
          </h2>
          <p className="text-gray-500 mt-2">
            Refresh yourself with our wide range of drinks
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((p) => (            
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
