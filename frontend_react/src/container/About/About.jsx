import React, { useEffect, useState } from 'react'
import './About.scss';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import {AppWrap, MotionWrap} from '../../wrapper';

//const abouts = [
  //{title: 'BackEnd Development', description: 'Expert at NodeJS, MongoDB, Firebase', imgUrl:images.about01},
  //{title: 'Frontend Development', description: 'Expert in Bootstarp, Sass, Tailwindcss, Framer-motion', imgUrl:images.about02},
  //{title: 'CP in C++', description: 'Spetialist at Codeforces(max-rating:1407)', imgUrl:images.about03},
  //{title: 'MERN Stack', description: 'Expert at MongoDB, Express, React, NodeJS', imgUrl:images.about04}
//]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then( (data) => setAbouts(data))
  },[])

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Apps</span> <br/>means <span>Good Experience</span></h2>

      <div className="app__profiles">
        {
          abouts.map( (about, index) => (
            <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.5, type: 'tween'}}
              className='app__profile-item'
              key={about.title+index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
