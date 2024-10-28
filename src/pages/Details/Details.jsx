import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./details.css"
import { toast } from 'react-toastify';
import { useCart } from "react-use-cart";
import { useWishlist } from 'react-use-wishlist';

const Details = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

  const productId = parseInt(id, 10); 
  const products = useSelector((state) => state.products.data || []);
  console.log(products);
  
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found</p>; 
  }

  const handleAddToCart = () => {
    const isLogin = localStorage.getItem('login');
    if (isLogin === 'true') {
        addItem(product);
        toast.success("Product added to cart");
    } else {
        toast.error("Product could not be added");
    }
  };

  const handleToggleWishlist = () => {
    const isLogin = localStorage.getItem('login');
    if (isLogin === 'true') {
        if (inWishlist(product.id)) {
            removeWishlistItem(product.id);
            toast.error("Removed from Wish list");
        } else {
            addWishlistItem(product);
            toast.success("Added to Wish list");
        }
    } else {
       toast.error("Please log in to manage your wish list");
    }
  };

  const { name, price, image } = product; 

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={image || "https://via.placeholder.com/500"} 
            className="d-block mx-lg-auto img-fluid"
            alt={name}
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{name}</h1>
          <p className="lead">Price: ${price || "Price unavailable."}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/shop" className="bth">Back</Link>
            <button onClick={handleAddToCart} className="btn add-cart">
              <i className="fa-solid fa-cart-shopping bht"></i>
            </button>
            <button onClick={handleToggleWishlist} className='wish-btn bht' style={{ background: "transparent", border: "none" }}>
              {inWishlist(product.id) ? 
                <i className="fa-solid fa-heart bht"></i> : 
                <i className="fa-regular fa-heart"></i>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

