import React, { useContext } from 'react'
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { Alert } from 'bootstrap';
import i18n from '../../i18n/i18next';
 import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../Context/ModeContext';
import "./wishlist.css"
const Wishlist = () => {
    const { t } = useTranslation();
    const [mode] = useContext(ModeContext);
    const {
        isWishlistEmpty,
        items,
        removeWishlistItem,
        inWishlist
    } = useWishlist();

    const { addItem } = useCart();

    const handleRemoveFromWishlist = (itemId) => {
        removeWishlistItem(itemId);
        alert("edildi")

    };

    const handleAddToCart = (item) => {
        addItem(item);
        alert("edilmedi")
    };
  return (
    <div className={`container ${mode}`}>

                {isWishlistEmpty ? (
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="https://media2.giphy.com/media/3o7aCYi35ajufMEN9K/giphy.gif" alt="" />
                    </div>
                ) : (
                    <>
                        <div className="row div-b">
                            <h1>{t("Wishlist.0")}</h1>
                            {items.map(item => (

                                <div className="col-lg-4 col-md-6 mb-4 my-5 whis-d div-a" key={item.id} >
                                    <div className="card position-relative single-card">
                                        <img src={item.image} className="card-img-top" alt="Product" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center"><b>{item.name}</b></h5>
                                            <p className="card-price text-center" style={{ color: "black" }}>Price: {item.price}$</p>
                                            <div className='btn-l'>
                                                <div className='btn-one'>
                                                    <button className="btn add-cart" onClick={() => handleAddToCart(item)}><i class="fa-solid fa-cart-shopping"></i></button>
                                                </div>
                                                <div className='btn-one'>
                                                    <Link to={`/products/${item.id}`} className="btn add-cart"><i class="fa-solid fa-eye"></i></Link>
                                                </div>
                                                <div className="btn-one">
                                            <button onClick={() => handleRemoveFromWishlist(item.id)} className='bth' >
                                                {inWishlist(item.id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                                            </button>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
  )
}

export default Wishlist

