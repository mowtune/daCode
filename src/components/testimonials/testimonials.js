import React, { Component } from 'react';
import Slider from "react-slick";
import classes from './testimonials.module.css';
import Stars from '../../assets/stars.png';
import Paulus from '../../assets/paulus.png';
import Circlecards from '../../assets/services_circle.png';
import Pl1 from '../../assets/pL1.png';
import Pl2 from '../../assets/pL2.png';


export default class testimonials extends Component {

    render() {
        const testimonials = [
            {
                id: 1,
                name: "Motun Haverinen",
                portfolio: "Owner, Ikirakenne Ltd",
                image: Pl2,
                stars: Stars,
                quote: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."
            },
            {
                id: 2,
                name: "Sosami Haverinen",
                portfolio: "Owner, Ikirakenne Ltd",
                image: Pl1,
                stars: Stars,
                quote: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."
            },
            {
                id: 3,
                name: "Paulus Haverinen",
                portfolio: "Owner, Ikirakenne Ltd",
                image: Paulus,
                stars: Stars,
                quote: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."
            },
            {
                id: 4,
                name: "Femi Haver",
                portfolio: "Owner, Ikirakenne Ltd",
                image: Pl1,
                stars: Stars,
                quote: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."
            },
            {
                id: 5,
                name: "David Rinen",
                portfolio: "Owner, Ikirakenne Ltd",
                image: Pl2,
                stars: Stars,
                quote: "We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand."
            },
        ];

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
            appendDots: (dots) => (
                <div className={classes.image}>
                    {dots}
                </div>
            ),
            customPaging: (i) => (
                <img className={classes.customPaging} src={testimonials[i].image} alt={testimonials[i].name} />
            )
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
                
                <div className={classes.cards}>
                    <Slider {...settings}>
                        {testimonials.map((testimonial) =>
                        <div key={testimonial.id}>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <h3>5.0</h3>
                                    <div className={classes.stars}>
                                        <img src={testimonial.stars} alt={testimonial.stars} />
                                    </div>
                                    <p>
                                        {testimonial.quote}
                                    </p>

                                    
                                </div>
                            </div>

                                    <div className={classes.name}>
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.portfolio}</p>
                                    </div>
                        </div>
                        )}
                    </Slider>
                    </div>                     
            </div>
        
      );
    }
}