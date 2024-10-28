
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./shop.css";
import SingleCard from "../../components/SingleCard/SingleCard";
import ShopSectionOne from "./components/ShopSectionOne";
import { fetchProducts } from "../../components/redux/productSlice"; 

const Shop = () => {
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state);

  const { items: products = [], loading, error } = data.products || {}; 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

 
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="divshop">
      <ShopSectionOne />

      {}
      <div className="row">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <SingleCard key={product.id} product={product} />
          ))
        ) : (
          <p></p> 
        )}
      </div>
    </div>
  );
};

export default Shop;


