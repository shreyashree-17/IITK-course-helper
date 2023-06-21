import React from 'react';
import './Home.css'
import iitkWeb from './iitk-cover.jpeg'
import iitkPhone from './iitk-cover-mobile.jpeg'


const Home = () => {
  const [dimension, setWindowWidth] = React.useState([window.innerWidth, window.innerHeight]);
  const imageUrl = dimension[0] > dimension[1] ? iitkWeb : iitkPhone;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth([window.innerWidth, window.innerHeight]);
    };
        
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);


  
  return (

    <section className='hero-section'>
      <div className='words'>
        <div className='main-heading'>We are your course helper</div>
        <div className='hero-para'>Every thing at one place now!!</div>
      </div>
      <img src={imageUrl} className='hero-img' alt="bacground"/>
    </section>
  );
};
export default Home;
