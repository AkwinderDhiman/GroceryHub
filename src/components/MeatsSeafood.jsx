import ProductCard from "./ProductCard";

export default function MeatsSeafood() {
  const products = [
    {
      id: 31,
      name: "Fresh Salmon",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      rating: 4.5,
      reviews: 3,
      onSale: true
    },
    {
      id: 32,
      name: "Chicken Breast",
      price: "$9.49",
      image: "https://images.unsplash.com/photo-1604908811797-1f1d3b9c5fbd",
    },
    {
      id: 33,
      name: "Raw Beef Steak",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.5,
      reviews: 3,
      onSale: true
    },
    {
      id: 34,
      name: "Shrimps",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
    },
    {
      id: 35,
      name: "Crab",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    },
    {
      id: 36,
      name: "Tuna Fish",
      price: "$13.49",
      image: "https://images.unsplash.com/photo-1514517220039-3c89d6c2c9a4",
      rating: 4.5,
      reviews: 3,
      onSale: true
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
