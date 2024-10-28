import React, { useContext, useEffect } from 'react'
import "./aboutSection1.css"
import { GiStarShuriken } from "react-icons/gi";
import { FaDotCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { FaCoins } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import MapComponents from './MapCompenents/MapComponents';
import Faq from "react-faq-component";
import { SlArrowDown } from "react-icons/sl";
import i18n from '../../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { ModeContext, useMode } from '../../../Context/ModeContext';
import Aos from 'aos';
const data = {

    title: "FAQ ",
    rows: [
      {
      title: "What questions should I ask a guitarist?",
        content: "You can ask about their inspiration, technique, gear, songwriting process, and memorable performances."
      },
     
      {
        title: "Which credit card do you accept?",
        content: "We accept Visa, MasterCard, American Express, and Discover."
      },
      {
      title: "How long will it be before I get a refund?",
       content: "Refunds typically take 5-7 business days to process, depending on your payment method."
      },
      {
        title: "How Many Types of guitars are there?",
        content: "There are several types of guitars including acoustic, electric, bass, classical, and resonator guitars."
      }
        
    ],
};
const styles = {
  bgColor: 'transparent',
  titleTextColor: "rgba(255, 166, 0, 0.815)",
  rowTitleColor: "rgba(255, 166, 0, 0.815)",
  rowContentColor: 'gray',
   arrowColor: "rgba(255, 166, 0, 0.815)",
};

const config = {
   animate: true,
   arrowIcon: <SlArrowDown />,
   tabFocus: true,

};



const AboutSection1 = () => {
  const [mode] = useContext(ModeContext);
  useEffect (()=>{
   Aos.init({
       duration:1000
   });

},[])
  const { t } = useTranslation();
  return (<div className={`div-umumi ${mode}`}>
    <div className='about-us'>
     <h1 className='a-h1'>{t("AboutSection1.0")}</h1>
     <a href='/' className='about-a'><p className='p-a-l'>{t("AboutSection1.1")}<IoIosArrowForward className='orange'/><p className='p-a'>{t("AboutSection1.2")}</p></p></a>
    </div>
    <div className='about-section3'>
    <div className='listone2'>
    <h5 className='h55'>{t("AboutSection1.3")}</h5>
    <h2 className='h22'>{t("AboutSection1.4")}</h2>
    <div className='divh5'><h2 className='h2-orange'>{t("AboutSection1.5")}</h2><h2 className='h22'>{t("AboutSection1.6")}</h2></div>
    </div>
    <div className='divfoto'><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/buying-electric-guitar-stand-with-various-colorful-electric-guitars-in-music-shop-musical-1024x684.jpg" alt="foto" width="700px" height="500px"/></div>
    <span class="elementor-divider-separator"> </span>
    <h1 className='h22-orange'>2010</h1>
    <p className='p-div'>{t("AboutSection1.7")}<br/>{t("AboutSection1.8")} <br/>{t("AboutSection1.9")}<br/>{t("AboutSection1.10")}<br/>{t("AboutSection1.11")}</p>
    <div className='div-qutu'>
    <div ><GiStarShuriken className="rosset"  /></div>
    <h2 className='h12'>12<span className='spanorange'>+</span></h2>
    <p className='p2'>{t("AboutSection1.12")}</p>
    </div>
    <button className="button2"><a href='/' className='text-us'>{t("AboutSection1.13")}</a> <FaLongArrowAltRight /></button>
    <div className='div-circle'>
        <div className='text-circle'><FaDotCircle className='circle' />{t("AboutSection1.14")}</div>
        <div className='text-circle'><FaDotCircle className='circle'/>{t("AboutSection1.15")}</div>
        <div className='text-circle'><FaDotCircle className='circle'/>{t("AboutSection1.16")}</div>
        <div className='text-circle'><FaDotCircle className='circle' />{t("AboutSection1.17")}</div>
    </div>
    <div className='tran-p-2'>
      <div className='div-t-2'>
         <MdPlaylistAddCheckCircle className='rosset'/>
         <div className='h12'>99<span className='spanorange'>%</span></div>
      <p className='p2'>{t("AboutSection1.18")}</p>
        </div>
      <div className='div-t-2'>
          <IoPeopleSharp className='rosset' />
        <div className='h12'>578<span className='spanorange'>+</span></div>
        <p className='p2'>{t("AboutSection1.19")}</p>
        </div>
      <div className='div-t-2'>
         <TfiCup className='rosset'/>
         <div className='h12'>89<span className='spanorange'>+</span></div>
           <p className='p2'>{t("AboutSection1.20")}</p>
        </div>
      <div className='div-t-2'>
         <FaCoins className='rosset'/>
        <div className='h12'>99<span className='spanorange'>%</span></div>
        <p className='p2'>{t("AboutSection1.21")}</p>
        </div>
    </div>
     <div className='faq-div-2'>
        <Faq data={data} config={config} styles={styles}/>
       
    </div>
    <div className='div-faq-1'>
    <h3 className='h33'>{t("AboutSection1.22")}</h3>
    <div className='div-f-l'><h2 className='h22'>{t("AboutSection1.23")}<h2 className='h2-orange'>{t("AboutSection1.24")}</h2></h2></div>
    <div className='div-img'>
        <img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/bearded-man-playing-guitar-in-a-music-studio-e1648783797853-1025x1536.jpg" alt="img1" width="350px" height="550px"/>
        <img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/thoughtful-woman-playing-guitar-at-home-1024x1536.jpg" alt="img2" width="350px" height="550px" />
    </div>
    </div>
    <div className='div-xerite'>
        <MapComponents/> 
        <div className='div-map-text'> 
        <h2 className='h2-map'>{t("AboutSection1.25")}</h2>
        <h3 className='h3-map'>Jbanez Store Kuta</h3>
        <p className='p2'>Jl. Sunset Road No. 189, Kuta – Bali</p>
        <h3 className='h3-map'>{t("AboutSection1.26")}</h3>
        <div className='map-icon-list'><FaPhoneAlt className='map-icon'/><p className='p2'>+62 345 678 890</p></div>
        <div className='map-icon-list'><SlEnvolope className='map-icon'/><p className='p2'>jbanez@domain.com</p></div>


        </div>
    </div>
    <div className='best-team'>
        <div className='team-text'>
          <h6 className='h66'>{t("AboutSection1.27")}</h6>
              <div className='div-h2'> <h2 className='h2-map'>{t("AboutSection1.28")}</h2><h2 className='h3-map'>{t("AboutSection1.29")}</h2></div>
        </div>
        <div className='div-team-img'>
             <div><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/man-with-a-guitar-e1648786165909-759x1024.jpg" alt='team-img' width="400px" height="550px"/><div className='div-text-img'><div className='opacty'><h2 className='h2-map'>Danny Doe</h2><p>{t("AboutSection1.30")}</p></div></div></div>
             <div><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/woman-with-guitar-in-the-forest-e1648789671617-759x1024.jpg" alt="team-img2" width="400px" height="550px" /><div className='div-text-img'><div className='opacty'><h2 className='h2-map'>Erika West</h2><p>{t("AboutSection1.31")}</p></div></div></div>
             <div><img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/mature-man-posing-in-studio-with-guitar-e1648791556526-759x1024.jpg" alt="team-img3" width="400px" height="550px"/><div className='div-text-img'><div className='opacty'><h2 className='h2-map'>Jackson Smith</h2><p>{t("AboutSection1.32")}</p></div></div></div>
        </div>
    </div>
    </div>
    </div>

    
  )
}

export default AboutSection1;
