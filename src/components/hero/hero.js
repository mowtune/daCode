import React from 'react';
import classes from './hero.module.css';
import Background from '../../assets/Analyse.png';
import Circle from '../../assets/3circle.png';
import Bg from '../../assets/analyse_bg.png';

const hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.textImage}>
        <div className={classes.text}>
          <div className={classes.line}></div>
          <div className={classes.bigText}>
          <h2>We help you create<br></br>your <span>website</span></h2>
          </div>
          <div className={classes.smallText}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
          </div>
          <div className={classes.btn}>
            <div className={classes.btn1}>
                <button>Get Started</button>
            </div>
            <div className={classes.btn2}>
                <button>Contact Us</button>
            </div>
          </div>
        </div>

          <div className={classes.image}>
              <img src={Background} alt='background' />
              <div className={classes.bg}>
                <img src={Bg} alt='bg' />
              </div>
          </div>

      </div>



        <div className={classes.circle}>
            <img src={Circle} alt='circle' />
        </div>
    </div>
  )
}

export default hero