import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../../../components/redux/productSlice";
import SingleCard from "./../../../components/SingleCard/SingleCard"; 
import "./shop2.css"
import { IoIosArrowForward } from "react-icons/io";
import i18n from "../../../i18n/i18next";
import { useTranslation } from 'react-i18next';
import { useMode } from '../../../Context/ModeContext';
import Aos from 'aos';
import { ModeContext } from './../../../Context/ModeContext';
const ShopSectionOne = () => {
  const { t } = useTranslation();
   const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [sortedData, setSortedData] = useState([]); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const products = data?.products?.data || [];
    setSortedData(products); 
  }, [data]);

  const handleSort = useCallback((order) => {
    const sorted = [...sortedData].sort((a, b) => {
      const nameA = a.name ? a.name.toUpperCase() : ''; 
      const nameB = b.name ? b.name.toUpperCase() : ''; 

      return order === 'asc'
        ? (nameA < nameB ? -1 : nameA > nameB ? 1 : 0)
        : (nameA > nameB ? -1 : nameA < nameB ? 1 : 0);
    });

    setSortedData(sorted); 
  }, [sortedData]);

  const handleFilter = useCallback((category) => {
    const products = data?.products?.data || [];
    if (category === 'all') {
      setSortedData(products);
    } else {
      const filtered = products.filter(item => item.name && item.name.toUpperCase().includes(category.toUpperCase())); 
      setSortedData(filtered);
    }
  }, [data]);

  return (
    <div className={`div-shop ${mode}`}>
        <div className='about-us'>
      <h1 className='a-h1'>{t("ShopSectionOne.0")}</h1>
      <a href="/" className="about-a"><p className='p-a-l'>{t("ShopSectionOne.1")}<IoIosArrowForward className='orange'/><p className='p-a'>{t("ShopSectionOne.2")}</p></p></a>
    </div>
    <div className="container my-5 filter-shop">
      <h4 className="h4-s">{t("ShopSectionOne.3")}</h4>
      <ul className="list-inline">
         <div className="button-shop">
        
        <li className="list-inline-item list-textt">
          <div className="list-group-item " onClick={() => handleFilter('all')}>All Products</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleFilter('Guitar')}>Guitar</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleFilter('Effect')}>Effect</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleFilter('Amplifier')}>Amplifier</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleFilter('Accessories')}>Accessories</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleSort('asc')}>A-Z</div>
        </li>
        <li className="list-inline-item list-textt">
          <div className="list-group-item" onClick={() => handleSort('desc')}>Z-A</div>
        </li>
        
        </div>
      </ul>
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {sortedData.length > 0 ? (
          sortedData.map((item) => (
            <SingleCard key={item.id} product={item} /> 
          ))
        ) : (
          <p></p> 
        )}
      </div>
    </div></div>
  );
};

export default ShopSectionOne;
