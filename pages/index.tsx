import styles from "@/styles/Home.module.css";

// import { client } from "../lib/client";
import { HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      {/* <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div> */}
      {/* FooterBanner */}
    </>
  );
};

export default Home;
