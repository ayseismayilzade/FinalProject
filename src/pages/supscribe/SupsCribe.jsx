// SubscribeForm.js
import React, { useContext, useEffect, useState } from 'react';
import './supscribe.css'
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { ModeContext, useMode } from '../../Context/ModeContext';
import Aos from 'aos';
const Subscribe = () => {
  const [mode] = useContext(ModeContext);
  useEffect (()=>{
   Aos.init({
       duration:1000
   });

},[])
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Subscribed with email: ${email}`);
   
    setEmail('');
  };

  return (
    <div  className={`supscribe-div ${mode}`}>
        <div className='sups-div-text'>
            <div className='h2-s-div'><h2 className='h2-s'>{t("SupsCribe.0")}</h2><h2 className='h2-s-orange'>{t("SupsCribe.1")}</h2></div>
            <p className='p2'>{t("SupsCribe.2")}</p>
        </div>
    <form onSubmit={handleSubmit} className='div-form' >
      <label>
       
        <input 
        className='formm-c'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t("SupsCribe.3")}
          
        />
      </label>
      <button type="submit" className='button-c' >
      {t("SupsCribe.4")}
      </button>
    </form>

    </div>
  );
};




export default Subscribe;

