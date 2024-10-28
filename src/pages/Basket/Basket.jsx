import React, { useContext } from 'react';
import { useCart } from 'react-use-cart';
import i18n from "../../i18n/i18next";
import { useTranslation } from 'react-i18next';
import { useMode } from '../../Context/ModeContext';
import { ModeContext } from '../../Context/ModeContext';
import { useNavigate } from 'react-router-dom'; // useNavigate'yi import edin
import "./basket.css"
import { toast } from 'react-toastify';

const Basket = () => {
  const { t } = useTranslation();
  const [mode] = useContext(ModeContext);
  const navigate = useNavigate(); // useNavigate'yi çağırın

  const {
    isEmpty,
    items,
    emptyCart,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  const checkUser = () => {
    const isLogin = localStorage.getItem('login');
    if (isLogin === 'true') {
      navigate('/checkout'); // navigate fonksiyonu ile yönlendirin
    } else {
      toast.error(t("Basket.0"));
    }
  }

  if (isEmpty) return <h2 className={`h2-2 ${mode}`}>{t("Basket.8")}</h2>;

  return (
    <div className={`div-basket ${mode}`}>
      <div className='container'>
        <h1 className='text-center'>{t("Basket.0")}</h1>
        <div className="div-b2">
          <div className="col-9">
            <table className="table">
              <thead className='t-b'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{t("Basket.1")}</th>
                  <th scope="col">{t("Basket.2")}</th>
                  <th scope="col">{t("Basket.3")}</th>
                  <th scope="col">{t("Basket.4")}</th>
                  <th scope="col">{t("Basket.5")}</th>
                </tr>
              </thead>
              <tbody className='t-b'>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td><img className='img-b' width={150} src={item.image} alt={item.title} /></td>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>
                      <button className='btn-az' onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                      <span className='mx-3'>{item.quantity}</span>
                      <button className='btn-ar' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    <td><button className='btn-cc' onClick={() => removeItem(item.id)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>{t("Basket.6")}{cartTotal}$</h4>
            <button className='btn-c my-3' onClick={emptyCart}>{t("Basket.7")}</button>
            <button onClick={checkUser} className="btn btn-dark my-btn my-3 me-3">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
