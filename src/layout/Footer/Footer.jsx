import React, { useContext, useEffect } from "react";
import { FaSquareInstagram, FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { HiMiniMapPin } from "react-icons/hi2";
import { GoClock } from "react-icons/go";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { SlEnvolope } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { ModeContext } from "../../Context/ModeContext";
import Aos from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.main.css"; 

const Footer = () => {
  const [mode] = useContext(ModeContext);
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className={`Footer ${mode} pt-5`}>
      <div className="container">
        <div className="row div-aa">
          <div className="col-lg-3 col-md-6 mb-4 div-cc">
            <div className="logo mb-3">
              <img
                src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/jbanez-logo-gold-1024x317.png"
                alt="logo"
                width="130"
                height="40"
              />
            </div>
            <p>{t("Footer.0")}<br />{t("Footer.1")}<br />{t("Footer.2")}</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/" className="icon-div-s"><FaSquareInstagram /></a>
              <a href="https://www.facebook.com/" className="icon-div-s"><FaFacebookSquare /></a>
              <a href="https://x.com/?lang=tr" className="icon-div-s"><FaSquareTwitter /></a>
              <a href="https://www.youtube.com/" className="icon-div-s"><FaSquareYoutube /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 ">
            <h4 className="footer-heading">{t("Footer.3")}</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">{t("Footer.4")}</a></li>
              <li><a href="/about" className="footer-link">{t("Footer.5")}</a></li>
              <li><a href="/shop" className="footer-link">{t("Footer.6")}</a></li>
              <li><a href="/contact" className="footer-link">{t("Footer.7")}</a></li>
              <li><a href="/blog" className="footer-link">{t("Footer.8")}</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 ">
            <h4 className="footer-heading">{t("Footer.9")}</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">{t("Footer.10")}</a></li>
              <li><a href="/" className="footer-link">{t("Footer.11")}</a></li>
              <li><a href="/" className="footer-link">{t("Footer.12")}</a></li>
              <li><a href="/" className="footer-link">{t("Footer.13")}</a></li>
              <li><a href="/cart" className="footer-link">{t("Footer.14")}</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 ">
            <h4 className="footer-heading">{t("Footer.15")}</h4>
            <ul className="list-unstyled">
              <li className="footer-info"><HiMiniMapPin className="icon" /> Jalan Sunset Road No. 189, Kuta - Bali</li>
              <li className="footer-info"><GoClock className="icon" /> {t("Footer.16")}</li>
              <li className="footer-info"><BsTelephoneOutboundFill className="icon" /> +62 345 678 890</li>
              <li className="footer-info"><SlEnvolope className="icon" /> jbanez@domain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

