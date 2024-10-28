
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import "./contact.css";
import EmailForm from '../About/components/EmailForm'; 
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';


const sendFormDataToServer = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; 
      isSuccess ? resolve() : reject(new Error("Server Error"));
    }, 1000);
  });
};


const Contact = () => {
  const [formStatus, setFormStatus] = useState(null); 
  const [position, setPosition] = useState([51.505, -0.09]); 
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactForm');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [formData]);


  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  };

  const handleFormSubmit = async (data) => {
    setLoading(true);
    setFormStatus(null);
    try {
      await sendFormDataToServer(data); 
      setFormStatus({ status: 'success', message: 'Your message has been successfully sent!' });
      setFormData({ email: '', message: '' });
      localStorage.removeItem('contactForm'); 
    } catch (error) {
      setFormStatus({ status: 'error', message: 'Failed to send the message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='div-umumi-contact'>
      <div className='about-us'>
        <h1 className='a-h1'>Contact</h1>
        <p className='p-a-l-c'>
          Home <IoIosArrowForward className='orange' /> 
          <span className='p-a'>Contact Us</span>
        </p>
      </div>

      <div className='div-1-contact'>
        <div className='div-1-1'>
          <h4 className='h4-c'>Contact Us</h4>
          <div className='send-c'>
            <h2 className='h22'>Send Us Your</h2> 
            <h2 className='h2-orange'>Message</h2>
          </div>
          <p className='p2'>
            We’d love to hear from you! Please fill out the form below to get in touch.
          </p>
          <img 
            src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/04/rows-of-electric-guitars-in-music-store-nobody-1024x684.jpg" 
            alt="contact-img" 
            width="650px" 
            height="450px" 
          />
        </div>

        <div className='div-1-2'>
          <EmailForm
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
          />

          
          {formStatus?.status === 'success' && (
            <div className="form-message success">
              {formStatus.message}
            </div>
          )}
          {formStatus?.status === 'error' && (
            <div className="form-message error">
              {formStatus.message}
            </div>
          )}

          {loading && <div className="loading">Sending your message...</div>}
        </div>
      </div>

      <div className='map-c'>
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }} whenReady={(map) => {
       
          map.target.on('click', handleMapClick);
        }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              Your selected location: {position[0].toFixed(2)}, {position[1].toFixed(2)}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
