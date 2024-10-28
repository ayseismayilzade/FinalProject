import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Email alanı boşsa hata mesajı ayarlanır
    if (e.target.value === '') {
      setEmailError('Email address cannot be empty.');
    } 
    // Email regex'e uymuyorsa başka bir hata mesajı ayarlanır
    else if (!emailPattern.test(e.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError(''); // Email geçerliyse hata mesajı temizlenir
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email alanı boşsa hata mesajı gösterilir
    if (email === '') {
      setEmailError('Email address cannot be empty.');
      return;
    }
    
    // Email geçerli değilse hata mesajı gösterilir
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Email geçerliyse form başarıyla gönderilir
    alert('The form has been sent successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className='form-c'>
       <div className='input-c-1'>
                    <h4 className='h4-c'>Name</h4>
                    <input type='text' placeholder='Your Name' className='input-name'></input>
                </div>
                <div className='input-c-1'>
                <h4 className='h4-c'>Phone</h4>
                <input type='tel' placeholder='Your Phone Number' className='input-name'></input>
                </div>
      <h4 className='h4-c'>Email</h4>
      <input className='input-name'
        type="email" 
        placeholder='Your Email'
        value={email} 
        onChange={handleEmailChange} 
        onBlur={handleEmailChange} // Blur olayı için de kontrol yapılır
      />
      {/* Eğer emailError doluysa hata mesajı gösterilir */}
      {emailError && <span className="error" style={{color: 'red'}}>{emailError}</span>}
      <div className='input-c-1'>
      <h4 className='h4-c'>Message</h4>
      <textarea placeholder='Your Message' className='input-message'> 
        
      </textarea>
      </div>
      <button  className="button-c" type="submit">Send Message</button>
    </form>
  );
};

export default EmailForm;
