import React, { Component } from 'react';
import Slider from "react-slick";
import classes from './blog.module.css';
import Arrow from '../../assets/arrow.png';
import Circle1 from '../../assets/services_circle.png';
import Circle2 from '../../assets/services_circle.png';

export default class Blog extends Component {
  render() {
    const blogs = [
      {
        title: "Why Your SaaS Business should use WordPress",
        content: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      },
      {
        title: "Why Your SaaS Business should use WordPress",
        content: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      },
      {
        title: "Why Your SaaS Business should use WordPress",
        content: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      },
    ];

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      // centerPadding: '60px',
      autoplay: true,
      cssEase: 'linear' ,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        }
      ]
    };

    return (
      <div className={classes.blog}>
        <div className={classes.news}>
          <div className={classes.smallText}>
            <h3>News & Articles</h3>
          </div>
          <div className={classes.bigText}>
            <h2>DaCode Blog</h2>
            <p>On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry.</p>
          </div>
          <div className={classes.btn}>
            <button>See All</button>
          </div>
        </div>

        <div className={classes.carousel}>
          <div className={classes.cards}>
            {/* <Slider {...settings}> */}
              {blogs.map((blog, index) => (
                <div key={index} className={classes.card}>
                  <div className={classes.why}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <div className={classes.more}>
                      <p>Read More</p>
                    </div>
                    <div className={classes.arrow}>
                     <img src={Arrow} alt='arrow' /> 
                    </div>
                      
                    
                  </div>
                </div>
              ))}
            {/* </Slider> */}
          </div>            
        </div>

        <div className={classes.circle1}>
          <img src={Circle1} alt='circle1' />
        </div>

        <div className={classes.circle2}>
          <img src={Circle2} alt='circle2' />
        </div>
      </div>
    )
  }
}
