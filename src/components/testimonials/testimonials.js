import React, { Component } from 'react';
import Slider from "react-slick";
import classes from './testimonials.module.css';
import Stars from '../../assets/stars.png';
import Paulus from '../../assets/paulus.png';
import Circlecards from '../../assets/services_circle.png';
import Pl1 from '../../assets/pL1.png';
import Pl2 from '../../assets/pL2.png';


export default class CenterMode extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 8000,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: 'linear' ,
      

            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
    
    // const testimonials = () => {
      return (
        <div className={classes.container}>
            <div className={classes.testimonials}>
                <p>Testiomonials</p>
                <h2>Our Happy Clients</h2>
            </div>
            <Slider {...settings}className={classes.slider}>
                
                <div classname={classes.cards}>
                <div className={classes.circleCards}>
                    <img src={Circlecards} alt='circlecards' />
                </div>
                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h3>5.0</h3>
                            <div className={classes.stars}>
                                <img src={Stars} alt='stars' />
                            </div>
                            <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                        </div>
                        
                    </div>
                    <div className={classes.image}>
                            <img src={Pl2} alt='pl2' />
                            <h4>Paulus Haverinen</h4>
                            <p>Owner, Ikirakenne Ltd</p>
                    </div>
                </div>

                <div classname={classes.cards}>
                <div className={classes.circleCards}>
                    <img src={Circlecards} alt='circlecards' />
                </div>
                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h3>5.0</h3>
                            <div className={classes.stars}>
                                <img src={Stars} alt='stars' />
                            </div>
                            <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                        </div>
                        
                    </div>
                    <div className={classes.image}>
                            <img src={Pl1} alt='pl1' />
                            <h4>Paulus Haverinen</h4>
                            <p>Owner, Ikirakenne Ltd</p>
                    </div>
                </div>

                <div classname={classes.cards}>
                <div className={classes.circleCards}>
                    <img src={Circlecards} alt='circlecards' />
                </div>
                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h3>5.0</h3>
                            <div className={classes.stars}>
                                <img src={Stars} alt='stars' />
                            </div>
                            <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                        </div>
                        
                    </div>
                    <div className={classes.image}>
                            <img src={Paulus} alt='paulus' />
                            <h4>Paulus Haverinen</h4>
                            <p>Owner, Ikirakenne Ltd</p>
                    </div>
                </div>

                <div classname={classes.cards}>
                <div className={classes.circleCards}>
                    <img src={Circlecards} alt='circlecards' />
                </div>
                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h3>5.0</h3>
                            <div className={classes.stars}>
                                <img src={Stars} alt='stars' />
                            </div>
                            <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                        </div>
                        
                    </div>
                    <div className={classes.image}>
                            <img src={Pl1} alt='pl1' />
                            <h4>Paulus Haverinen</h4>
                            <p>Owner, Ikirakenne Ltd</p>
                    </div>
                </div>

                <div classname={classes.cards}>
                <div className={classes.circleCards}>
                    <img src={Circlecards} alt='circlecards' />
                </div>
                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h3>5.0</h3>
                            <div className={classes.stars}>
                                <img src={Stars} alt='stars' />
                            </div>
                            <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                        </div>
                        
                    </div>
                    <div className={classes.image}>
                            <img src={Pl2} alt='pl2' />
                            <h4>Paulus Haverinen</h4>
                            <p>Owner, Ikirakenne Ltd</p>
                    </div>
                </div>
            </Slider>
    
        </div>
      )
    } 
}