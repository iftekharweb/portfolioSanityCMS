import React, { useState } from 'react';
import {client} from '../../client';
import { images } from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact)
      .then( () => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }


  return (
    <>
      <h2 className='head-text'><span>Contact</span> With Me Anytime</h2>
      <div className="app__footer-cards">
        <div className='app__footer-card'>
          <img src={images.email} alt='Email' />
          <a href="mailto:iftekharweb@gmail.com" className='p-text'>iftekharweb@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href="tel: +880 1888659546" className='p-text'>+880 1888659546</a>
        </div>
      </div>
    {
      !isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            className='p-text'
            type="text"
            name="name"
            value={name}
            placeholder='Your Name'
            onChange={handleChangeInput}
          />
        </div>
        <div className='app__flex'>
          <input 
            className='p-text'
            type="email"
            name="email"
            value={email}
            placeholder='Your Email'
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <button
          type='button'
          className='p-text'
          onClick={handleSubmit}
        >
          {loading ? 'sending' : 'Send Message'}
        </button>
      </div>

      : <div>
          <h3 className='head-text'>Thank you, <span>{name}</span>❤️</h3>
          <h3 className='head-text'>For Getting In Touch!</h3>
      </div>
    }
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
