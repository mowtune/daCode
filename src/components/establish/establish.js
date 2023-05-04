import React from 'react';
import classes from './establish.module.css';
import Calender from '../../assets/calender.png';
import Circle1 from '../../assets/circle_e.png';
import Circle2 from '../../assets/circle_c.png';

const establish = () => {
  return (
    <div className={classes.establish}>
    <div className={classes.text}>
      <div className={classes.big}>
        <h2>Establishing online presence</h2>
      </div>
      <div className={classes.small}>
        <p>Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.</p>
        <p>This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.</p>
        <p>We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.</p>
        <p>The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.</p>
        <p>We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
      </div>
      <div className={classes.circle1}>
        <img src={Circle1} alt='circle1' />
      </div>
    </div>

    <div className={classes.schedule}>
      <div className={classes.text2}>
        <h3>Schedule a free session</h3>
      </div>
      
      <div className={classes.calender}>
        <img src={Calender} alt='calender' />
      </div>
      <div className={classes.circle2}>
        <img src={Circle2} alt='circle2' />
      </div>
    </div>
    
  </div>
  )
}

export default establish