import React, { Component } from 'react';
import classes from './portifolio.module.css';
import Circle from '../../assets/services_circle.png';
import Placeholder from '../../assets/place _holder.png';
import Placeholder2 from '../../assets/place _holder2.png';
import Placeholder3 from '../../assets/place_holder3.png';
import Arrowleft from '../../assets/arrow_left.png';
import Arrowright from '../../assets/arrow_right.png';
import Circle2 from '../../assets/services_circle.png';
import Circle3 from '../../assets/services_circle.png';
import Slider from 'react-slick';

// export default portifolio
export default class portifolio extends Component {
  render() {

    function PrevArrow(props) {
      const { 
        className, 
        style, 
        onClick 
      } = props;
      return (
        <div
          className={ className }
          style={{ ...style, display: "flex",
            justifyContent: "space-between",
            marginTop: "-32rem",
            paddingLeft: "3.5rem",
            paddingRight: "3.5rem",
            cursor: "pointer",
            backgroundImage: `url(${Arrowleft})`
          }}
          onClick={onClick}
          />
      );
    }

    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={{className}}
          style={{ ...style, display: "flex",
            justifyContent: "space-between",
            marginTop: "-32rem",
            paddingLeft: "3.5rem",
            paddingRight: "3.5rem",
            cursor: "pointer",
            background: `url(${Arrowright})`
          }}
          onClick={onClick}
          />
      );
    }

     var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
};


// const portifolio = () => {
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
        

        <div className={classes.placeholder}>
          {/* <Slider {...settings} className={classes.arrow}> */}

            <div className={classes.ph}>
                <img src={Placeholder} alt='placeholder' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
            </div>
            <div className={classes.ph}>
                <img src={Placeholder2} alt='placeholder' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
            </div>
            <div className={classes.ph}>
                <img src={Placeholder3} alt='placeholder' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
            </div>

          {/* </Slider> */}
        </div>
            
                <div className={classes.arrow}>
                  <img src={Arrowleft} alt='arrowleft' />
                  <img src={Arrowright} alt='arrowright' />
                </div>
           

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