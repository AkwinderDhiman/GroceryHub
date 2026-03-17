import Header from "../Components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../Components/ProductCard";
import products from "../data/products";

const Home = ()=> {

    const product = {
    name: "Apple",
    price: 2.5
  };

  
    return (
       <>
       <Header/>

      <Navbar />
       <div className="flex p-6">
        <Sidebar />
      <div className="grid grid-cols-3 gap-6">

            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}

          </div>
        </div>
    </>
    )
}

export default Home;