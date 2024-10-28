// import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { ModeContext } from '../../Context/ModeContext';
// import { useTranslation } from 'react-i18next';
// import '../../i18n/i18next';
// import { useNavigate } from 'react-router-dom';

// const EditProduct = () => {



//     const navigate = useNavigate();
//     const [mode] = useContext(ModeContext);
//     const { t } = useTranslation();



//     return (
//         <div className=''>
//             <div className={`cotainer fluid ${mode}`}>
//                 <div className='about-box'>
//                     <p>Edit</p>
//                 </div>

//                 <h1 className='text-center my-5'>{t('title')}</h1> 


//             </div>
//         </div>
//     );
// };

// export default EditProduct;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../components/redux/productSlice'; // Burada updateProduct adında bir aksiyon olmalı
import { useTranslation } from 'react-i18next';


const EditProduct = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const product = useSelector((state) =>
    state.data.products.data.find((item) => item.id === id)
  );

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, name, price, image }));
    navigate('/dashboard'); 
  };

  if (!product) {
    return <p>{t("Product not found")}</p>;
  }

  return (
    <div className="edit-product-container">
      <h1>{t("Edit Product")}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t("Product Name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{t("Product Price")}</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{t("Product Image URL")}</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">{t("Update Product")}</button>
      </form>
    </div>
  );
};

export default EditProduct;
