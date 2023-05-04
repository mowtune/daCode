import React from 'react';
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero';
import Services from '../../components/services/services';
import Portifolio from '../../components/portifolio/portifolio';
import Reality from '../../components/reality/reality';
import Interested from '../../components/interested/interested';
import Testimonials from '../../components/testimonials/testimonials';
import Blog from '../../components/blog/blog';
import Footer from '../../components/footer/footer';

const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Services/>
        <Portifolio/>
        <Reality/>
        <Interested/>
        <Testimonials/>
        <Blog/>
        <Footer/>
      
    </div>
  )
}

export default home