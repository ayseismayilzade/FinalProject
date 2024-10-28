// // import React, { useContext } from 'react';
// import { ModeContext } from '../../Context/ModeContext';
// import { useTranslation } from 'react-i18next';
// import '../../i18n/i18next';
// import { useContext } from 'react';

// const AddProduct = () => {
//     const [mode = ''] = useContext(ModeContext);
//     const { t } = useTranslation();

//     return (
//         <div className={`edit-dark-back ${mode}`}>
//             <div className="container-fluid">
//                 <div className='about-box'>
//                     <p>{t('Add Product')}</p>
//                 </div>

//                 <h1 className='text-center my-5'>{t('title')}</h1> 
//             </div>
//         </div>
//     );
// }

// export default AddProduct;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from "../../components/redux/productSlice"
import { useTranslation } from 'react-i18next';


const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      const newProduct = {
        name,
        price: parseFloat(price), 
        image,
      };
  
      try {
        await dispatch(createProduct(newProduct)).unwrap();
        alert("Ürün başarıyla eklendi!"); 
        setName('');
        setPrice('');
        setImage('');
      } catch (error) {
        console.error("Ürün ekleme hatası:", error); 
        alert("Ürün eklenirken bir hata oluştu.");
      }
    };
  
    return (
      <div>
        <h2>Ürün Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ürün Adı:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Fiyat:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Resim URL'si:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Ürün Ekle</button>
        </form>
      </div>
    );
  };
  
  export default AddProduct;


