import React, { useState, useContext } from 'react';
import { useCart } from 'react-use-cart';
import { ModeContext } from '../../Context/ModeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CheckOut.css'; // Özel stiller için bir CSS dosyası oluşturun

const CheckOut = () => {
  const { items, setItems } = useCart();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvvCode: '',
  });
  const [mode] = useContext(ModeContext);
  const { t } = useTranslation();
  const navigate = useNavigate(); // useNavigate hook'u

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const completePayment = () => {
    const { cardNumber, nameOnCard, expiryDate, cvvCode } = paymentDetails;

    if (!cardNumber || !nameOnCard || !expiryDate || !cvvCode) {
      toast.error(t("CheckOut.0")); // Uyarı mesajı
      return;
    }

    // Ödeme işlemi başarılı ise sepeti temizle
    setItems([]);

    // Yönlendirme işlemi
    setTimeout(() => {
      navigate('/successpayment'); // navigate ile yönlendirme
    }, 2000); // 2 saniye sonra yönlendirme
  };

  return (
    <section className={`checkout-section ${mode}`}>
      <div className="container">
        <h1 className="text-center">{t("CheckOut.1")}</h1>

        <div className="payment-details">
          <h3>{t("CheckOut.1")}</h3>
          <div className="form-group">
            <label>{t("CheckOut.2")}</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="XXXX-XXXX-XXXX-XXXX" // Placeholder for card number
            />
          </div>

          <div className="form-group">
            <label>{t("CheckOut.3")}</label>
            <input
              type="text"
              name="nameOnCard"
              value={paymentDetails.nameOnCard}
              onChange={handleChange}
              className="form-control"
              placeholder="Full Name as on Card" // Placeholder for name on card
            />
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>{t("CheckOut.6")}</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="MM/YY" // Placeholder for expiry date
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>{t("CheckOut.5")}</label>
                <input
                  type="password"
                  name="cvvCode"
                  value={paymentDetails.cvvCode}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="CVV" // Placeholder for CVV code
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-3" onClick={completePayment}>
            {t("CheckOut.10")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;



