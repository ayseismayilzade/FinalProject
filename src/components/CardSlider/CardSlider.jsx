
import React, { useRef, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/productSlice";
import SingleCard from '../SingleCard/SingleCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './cardslider.module.css'; 
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { ModeContext, useMode } from '../../Context/ModeContext';
import Aos from 'aos';
const SlickSlider = () => {
  const { t } = useTranslation();
  const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });
},[])
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  const data = useSelector((state) => state);
  const { items: products = [], loading, error } = data.products || {};

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleAddToCart = (product) => {
    
  };

  const handleToggleWishlist = (product) => {
    
  };

  const inWishlist = (id) => {
   
    return false; 
  };

  return (
      <div className={`div-cl ${mode}`}>
    <div className={styles.slickSlider}>
      <div className="container">
        <div className={styles.cardSlider}>
          <Slider {...settings} ref={sliderRef}>
            {Array.isArray(data.products.data) && data.products.data.length > 0 ? (
              data.products.data.map((product) => (
                <SingleCard
                  key={product.id}
                  product={product}
                  
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          </Slider>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;

