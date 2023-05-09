import React, { Component } from 'react';
import classes from './portifolio.module.css';
import Circle from '../../assets/services_circle.png';
import Placeholder from '../../assets/place _holder.png';
import Placeholder2 from '../../assets/place _holder2.png';
import Placeholder3 from '../../assets/place_holder3.png';
// import Arrowleft from '../../assets/arrow_left.png';
// import Arrowright from '../../assets/arrow_right.png';
import Circle2 from '../../assets/services_circle.png';
import Circle3 from '../../assets/services_circle.png';
import Slider from 'react-slick';


export default class Portifolio extends Component {
  render() {

    

     const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 4000,
      autoplaySpeed: 5000,
      autoplay: true,
      cssEase: 'linear' ,
    
};

  return (
    <div className={classes.portifolio}>
      <div className={classes.port}>
        <h3>Portfolio</h3>
        <h1>Our Great Work</h1>
        <div className={classes.btn}>
          <button>Website Optimization</button>
          <h3>Website Redesign</h3>
          <h3>Search Engine Optimization</h3>
        </div>
      </div>
      <div className={classes.port2}>
        <div className={classes.circle}>
            <img src={Circle} alt='circle' />
        </div>

        {/* Start of slider */}
        
          <Slider {...settings} className={classes.placeholder}>
            <div className={classes.cards}>
              <div className={classes.card}>
                <div className={classes.ph}>
                  <img src={Placeholder} alt='placeholder' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                </div>
              </div>
            </div>
            
              <div className={classes.cards}>
                <div className={classes.card}>
                  <div className={classes.ph}>
                      <img src={Placeholder2} alt='placeholder' />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>
              </div>
       
              <div className={classes.cards}>
                <div className={classes.card}>
                  <div className={classes.ph}>
                      <img src={Placeholder3} alt='placeholder' />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>
              </div>

              <div className={classes.cards}>
                <div className={classes.card}>
                  <div className={classes.ph}>
                      <img src={Placeholder2} alt='placeholder' />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>
              </div>


          </Slider>

            {/* <div className={classes.arrow}>
                    <img src={Arrowleft} alt='arrowleft' />
                    <img src={Arrowright} alt='arrowright' />
            </div> */}
          <div className={classes.background}></div>
            
                
           

            
      </div>

      {/* end of slider */}

            <div className={classes.btn2}>
                <button>See All</button>
            </div>
            <div className={classes.circle2}>
              <img src={Circle2} alt='circle2' />
            </div>
            <div className={classes.circle3}>
            <img src={Circle3} alt='circle3' />
            </div>
    </div>
  );
  }
}

// }