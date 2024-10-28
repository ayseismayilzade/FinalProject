import React, { useContext, useEffect } from 'react'
import "./Section.main.css"
import { GiStarShuriken } from "react-icons/gi";
import { FaDotCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import CardSlider from "../../../../components/CardSlider/CardSlider"
import i18n from '../../../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { ModeContext, useMode } from '../../../../Context/ModeContext';
import Aos from 'aos';
 
const Section3 = () => {
  const { t } = useTranslation();
  const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])
  return (
    <div className={`section3 ${mode}`}>
    <div  className='listone'>
    <h5  className='h55'>{t("Section3.0")}</h5>
    <h2 className='h22'>{t("Section3.1")}</h2>
    <div className='divh5'><h2 className='h2-orange'>{t("Section3.2")}</h2><h2 className='h22'>{t("Section3.3")}</h2></div>
    </div>
    <div  className='divfoto'><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/buying-electric-guitar-stand-with-various-colorful-electric-guitars-in-music-shop-musical-1024x684.jpg" alt="foto" width="700px" height="500px"/></div>
    <span class="elementor-divider-separator"> </span>
    <h1 className='h22-orange'>2010</h1>
    <p className='p-div'>{t("Section3.4")}<br/>{t("Section3.5")}<br/>{t("Section3.6")} <br/>{t("Section3.7")}<br/>{t("Section3.8")}</p>
    <div className='div-qutu'>
    <div ><GiStarShuriken className="rosset"  /></div>
    <h2 className='h12'>12<span className='spanorange'>+</span></h2>
    <p className='p2'>{t("Section3.9")}</p>
    </div>
    <button className="button2"><a href='/' className='text-us'>{t("Section3.10")}</a> <FaLongArrowAltRight /></button>
    <div className='div-circle'>
        <div className='text-circle'><FaDotCircle className='circle' /> {t("Section3.11")}</div>
        <div className='text-circle'><FaDotCircle className='circle'/> {t("Section3.12")} </div>
        <div className='text-circle'><FaDotCircle className='circle'/>{t("Section3.13")}</div>
        <div className='text-circle'><FaDotCircle className='circle' />{t("Section3.14")} </div>
    </div>
    <div className='div-transparent'>
      <div className='transparent-div2'><MdRocketLaunch className='rosset' />
      <div className='div-colum'>
        <h2 className='h2-t'>{t("Section3.15")}</h2>
         <p className='p-t'>{t("Section3.16")}</p>
      </div>
      </div>
      <div className='transparent-div2'><BsCashCoin  className='rosset'/>
      <div className='div-colum'>
        <h2 className='h2-t'>{t("Section3.17")}</h2>
        <p className='p-t'>{t("Section3.18")}</p>
      </div>
      </div>
      <div className='transparent-div2'><RiSecurePaymentLine className='rosset' />
      <div className='div-colum'>
        <h2 className='h2-t'>{t("Section3.19")}</h2>
        <p className='p-t'>{t("Section3.20")}</p>
      </div>
      </div>
      <div className='transparent-div3'><MdOutlineSupportAgent className='rosset'/>
      <div className='div-colum'>
      <h2 className='h2-t'>{t("Section3.21")}</h2>
      <p className='p-t'>{t("Section3.22")}</p>
      </div>
      </div>
     
    </div>
       
    </div>
    
  )
}

export default Section3
