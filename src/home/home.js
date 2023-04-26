import React from 'react';
import Header from '../../src/components/header/header'
import Hero from '../../src/components/hero/hero';
import Services from '../../src/components/services/services';
import Portifolio from '../../src/components/portifolio/portifolio';
import Reality from '../../src/components/reality/reality';
import Interested from '../../src/components/interested/interested';
import Testimonials from '../../src/components/testimonials/testimonials'

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
      
    </div>
  )
}

export default home