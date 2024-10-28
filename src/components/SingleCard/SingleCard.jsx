
import "./singlecart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import i18n from "../../i18n/i18next";
import { useTranslation } from 'react-i18next';
import { useMode } from '../../Context/ModeContext';
import Aos from 'aos';
import { ModeContext } from '../../Context/ModeContext';
import { useContext, useEffect } from "react";
import { toast } from 'react-toastify';


const SingleCard = ({ product }) => {
  const { t } = useTranslation();
  const [mode] = useContext(ModeContext);
  useEffect (()=>{
   Aos.init({
       duration:1000
   });

},[])
  const handleAddToCart = () => {
    const isLogin = localStorage.getItem('login');
    if (isLogin === 'true') {
        addItem(product);
        toast.success( "product elave edildi");
    } else {
        toast.error("prduct elave edilmedi");
    }
};
const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
const handleToggleWishlist = () => {
  const isLogin = localStorage.getItem('login');
  if (isLogin === 'true') {
      if (inWishlist(product.id)) {
          removeWishlistItem(product.id);
          toast.error("Remove from Wish list")
      } else {
          addWishlistItem(product);
          toast.success("Added to Wish list");
      }
  } else {
     toast.error("Remove from Wish list");
  }
};


  const { addItem } = useCart();
  const { thumbnail, name, image, price } = product || {};

  return (
    
    <div className="card-width col-lg-3 p-3 ">
      <div className={`div-single ${mode}`}>
      <div className="card" style={{ background:"rgba(255, 166, 0, 0.815)" }}>
        {}
        {thumbnail ? (
          <img src={thumbnail} className="card-img-top" alt={name} />
        ) : (
          image && (
            <img src={image} className="card-img-top" alt={name} />
          )
        )}

        <div className="card-body">
          <div className="card-name"><h5 className="card-title" >{name || "No Title"}</h5></div>
          {}
          <div className="card-price"><p className="card-text" style={{ color: "black" }}>
            {price ? `$${price}` : "Price Unavailable"}
          </p></div>
          <div className="list-s-i">
          <Link to={`/products/${product.id}`} className="btn add-cart">
            <i className="fa-solid fa-eye bht"></i> {}
          </Link>
          <button onClick={handleAddToCart} className="btn add-cart"><i className="fa-solid fa-cart-shopping bht"></i></button>
          <button onClick={() => handleToggleWishlist(product)} className='wish-btn bht' style={{ background:"transparent", border:"none"}}>
                    {inWishlist(product.id) ? <i className="fa-solid fa-heart bht"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
               </div> 
        </div>
      </div>
    </div></div>
  );
};

export default SingleCard;
