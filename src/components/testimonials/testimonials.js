import React, { Component } from 'react';
import Slider from "react-slick";
import classes from './testimonials.module.css';
import Stars from '../../assets/stars.png';
import Paulus from '../../assets/paulus.png';
import Circlecards from '../../assets/services_circle.png';
import Pl1 from '../../assets/pL1.png';
import Pl2 from '../../assets/pL2.png';


export default class Testimonials extends Component {

    render() {

        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 6000,
            autoplay:true,
            pauseOnDotsHover: true,
    };

    return (
        <div className={classes.container}>
            <div className={classes.testimonials}>
                <p>Testiomonials</p>
                <h2>Our Happy Clients</h2>
            </div>

            <div className={classes.circleCards}>
                        <img src={Circlecards} alt='circlecards' />
            </div>
                
                
                    <Slider {...settings} className={classes.cards}>
                        <div className={classes.card}>
                            <div className={classes.innercard}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={Stars} alt='stars' />
                                        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                                    </div>
                                </div>

                            </div>  
                            <div className={classes.name}>
                                <img src={Pl2} alt='paulus' />
                                <h4>Paulus Haverinen</h4>
                                <p>Owner, Ikirakenne Ltd</p>
                            </div>       
                        </div>
                            

                        <div className={classes.card}>
                            <div className={classes.innercard}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={Stars} alt='stars' />
                                        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                                    </div>
                                </div>
                            </div>  
                                <div className={classes.name}>
                                    <img src={Pl1} alt='paulus' />
                                        <h4>Paulus Haverinen</h4>
                                    <p>Owner, Ikirakenne Ltd</p>
                                </div>       
                        </div>

                        <div className={classes.card}>
                            <div className={classes.innercard}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={Stars} alt='stars' />
                                        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                                    </div>
                                </div>
                            </div> 
                                <div className={classes.name}>
                                    <img src={Paulus} alt='paulus' />
                                        <h4>Paulus Haverinen</h4>
                                    <p>Owner, Ikirakenne Ltd</p>
                                </div>        
                        </div>

                        <div className={classes.card}>
                            <div className={classes.innercard}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={Stars} alt='stars' />
                                        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                                    </div>
                                </div>
                            </div>
                                <div className={classes.name}>
                                    <img src={Pl1} alt='paulus' />
                                        <h4>Paulus Haverinen</h4>
                                    <p>Owner, Ikirakenne Ltd</p>
                                </div>         
                        </div>

                        <div className={classes.card}>
                            <div className={classes.innercard}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={Stars} alt='stars' />
                                        <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                                    </div>
                                </div>
                            </div> 
                                <div className={classes.name}>
                                    <img src={Pl2} alt='paulus' />
                                        <h4>Paulus Haverinen</h4>
                                    <p>Owner, Ikirakenne Ltd</p>
                                </div>       
                        </div>
                       
                    </Slider>
                    </div>                     
      );
    }
}