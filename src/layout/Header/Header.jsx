import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import i18n from "../../i18n/i18next";
import { useTranslation } from "react-i18next";
import { useMode } from "../../Context/ModeContext";
import { useCart } from "react-use-cart";
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import "./header.css";

const Header = () => {
  const products = useSelector((state) => state.products.data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {
    setIsModalOpen(false);
    setKeyword('');
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setKeyword('');
  };
  const handleKeywordChange = (e) => setKeyword(e.target.value.toLowerCase());
  const handleItemClick = () => setIsModalOpen(false);

  const [mode, toggleMode] = useMode();
  const icon = mode === "light" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>;
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
  const { totalItems } = useCart();
  const isLoggedIn = localStorage.getItem("login") === "true";
  const displayTotalItems = isLoggedIn ? totalItems : 0;

  const changeMyLang = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    changeMyLang(savedLang);
  }, []);

  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("activeUser"));
    setActiveUser(user);
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={mode}>
      <div className="list0">
        <div className="logo">
          <img
            className="logo-i"
            src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/jbanez-logo-gold-1024x317.png"
            alt="logo"
          />
        </div>
        <div className="list">
          <a href="/" className="p-list">{t("Header.0")}</a>
          <a href="/about" className="p-list">{t("Header.1")}</a>
          <a href="/shop" className="p-list">{t("Header.2")}</a>
          <a href="/contact" className="p-list">{t("Header.3")}</a>
        </div>
        <div className="icon-list">
          <Button type="primary" onClick={showModal} className="text-center magni-box">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Modal
            className="custom-modal"
            title={t("Search.0")}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="input-group mb-3 i-q">
              <input
                onChange={handleKeywordChange}
                type="text"
                className="form-control"
                placeholder={t("Search.1")}
                aria-label={t("Search.1")}
              />
            </div>
            <ul className="list-group">
              {!keyword ? (
                <p>{t("Search.1")}</p>
              ) : products.filter((p) => p.title?.toLowerCase().includes(keyword)).length > 0 ? (
                products.filter((p) => p.title?.toLowerCase().includes(keyword)).map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-start custom-link">
                    <Link to={`/products/${item.id}`} onClick={handleItemClick}>
                      <img height={70} style={{ objectFit: "contain" }} width={70} src={item.photo} alt="img" />
                      <span className="ms-3">{item.title}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <p>{t("Search.2")}</p>
              )}
            </ul>
          </Modal>
          {isLoggedIn ? (
            <Link className="link-login" to="/account">
              {activeUser && activeUser.fullname === "Admin" ? "Admin" : activeUser?.fullname}
            </Link>
          ) : (
            <Link to="/login">{t("Header.5")}</Link>
          )}
          <select className="lang-select" value={lang} onChange={(e) => changeMyLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="az">AZ</option>
          </select>
          <button onClick={toggleMode} className="dark-light">
            {icon}
          </button>
          <Link to="/wishlist" className="heart">
            <i className="fa-solid fa-heart"></i>
          </Link>
        </div>
        <div className="cart-div">
          <Link to="/basket" className="cart-div2">
            {t("Header.7")}
            <div className="cart-icon-wrapper">
              <FaShoppingCart className="cart-icon" />
              <span className="shop-badge ">{displayTotalItems}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
