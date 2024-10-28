import React, { useContext, useEffect } from 'react'
import "./Section1.main.css"
 import i18n from '../../../i18n/i18next';
 import { useTranslation } from 'react-i18next';
 import { ModeContext, useMode } from '../../../Context/ModeContext';
 import Aos from 'aos';
const Section1 = () => {

   const { t } = useTranslation();
   const [mode] = useContext(ModeContext);
   useEffect (()=>{
    Aos.init({
        duration:1000
    });

},[])
  return (
    
    <div >
  <div className={`moving-div ${mode}`}>
   <div data-aos="fade-right" className='list1'>  
    <h5 className='h55'>{t("Section1.0")}</h5>
    <h1 className='h11'>{t("Section1.1")}</h1>
    <h2 className='h2-orange'>{t("Section1.2")}</h2>
    <h2 className='h22'>{t("Section1.3")}</h2>
    <p>{t("Section1.4")}   <br/>{t("Section1.5")} </p>
   </div>
 </div>
 <div  className="div-gitar">
  <img  src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/jbanez-guitar-electric-xmksM4em7a0.png" alt="gitar" width="240px" height="650px" className='gitar-hover'/>
 </div>
 <div className={`moving-div2 ${mode}`}>
 <div data-aos="fade-left" className='sec1-div0'>
  <h5 className='h55'>{t("Section1.6")}</h5>
  <p>{t("Section1.7")}<br/>{t("Section1.8")}  <br/>{t("Section1.9")} </p>
 <div className='div-reqem'><h2 className='h22'>$</h2><h2 className='h2-orange'>3,799</h2></div>
 <div className='button1'>{t("Section1.10")}</div>
 </div>
 </div>
 <div className={`paul ${mode}`}><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/paul-timmons-signature-2-1024x292.png" alt="sekil" width="300px" height="70px"/></div>
 <h5 className='timmons'>Paul Timmons</h5>
 </div>
  )
}

export default Section1