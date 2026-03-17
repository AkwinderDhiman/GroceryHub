import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

const Home = ()=> {

    const product = {
    name: "Apple",
    price: 2.5
  };

  
    return (
       <>
       <Header/>
      <h2>Product List</h2>
      <ProductCard product={product} />
    </>
    )
}

export default Home;