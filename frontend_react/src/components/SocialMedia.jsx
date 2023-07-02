import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://web.facebook.com/iftikharmohammedshishir/"><FaFacebookF/></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/iftekhar-md-shishir-9292a5231/"><FaLinkedin/></a>
      </div>
      <div>
        <a href="https://www.instagram.com/iftekhar_md._shishir/"><BsInstagram/></a>
      </div>
    </div>
  )
}

export default SocialMedia;
