import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'
const ErrorPage = () => {
  return (
    <div className='div-er-umumi'>
    <div className='div-er-0'>
      <img src="https://templatekit.jegtheme.com/jbanez/wp-content/uploads/sites/253/2022/03/guitarist-playing-1024x682.jpg" alt="foto" className='img-er' />
    <div className='error-div'>
      <h1 className='h1-er'>404</h1>
      <h2 className='h2-orange'>Page Not Found</h2>
      <p className='p-er'>The page you are looking for doesn't exist or an error occurred.</p>
      <button className='button-er'><Link className='link-er' to="/">Go Back to Home</Link></button>
    </div>
    </div>
    </div>
  );
};

export default ErrorPage;
