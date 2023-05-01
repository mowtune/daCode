import React from 'react';
import classes from './footer.module.css';
import Arrowdown from '../../assets/arrowdown.png';

const footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.left}>
            <h1>Logo</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

                <div className={classes.copyright}>
                    <h6>© DaCode. 2020</h6> 
                </div>
                       
        </div>
        
        <div className={classes.right}>
            <div className={classes.right2}>
                <div className={classes.work}>
                    <h2>Work</h2>
                </div>
                <div className={classes.work2}>
                    <p>Blog</p>
                    <p>How We Work</p>
                    <p>Testimonials</p>
                </div>
            </div>
        
            <div className={classes.right2}>
                <div className={classes.work}>
                    <h2>Services</h2>
                </div>
                <div className={classes.work2}>
                    <p>Marketing Strategy</p>
                    <p>Website Optimization</p>
                    <p>Email Maerketing</p>
                </div>
            </div>
        
            <div className={classes.right2}>
                <div className={classes.work}>
                    <h2>Business Solution</h2>
                </div>
                <div className={classes.work2}>
                    <p>Partnership</p>
                    <p>About Project</p>
                    <p>Corporate</p>
                </div>
            </div>
        
            <div className={classes.right2}>
                <div className={classes.work}>
                    <h2>Language</h2>
                </div>
                
            </div>
            <div className={classes.work2}>
                    <img src={Arrowdown} alt='arrowdown' />
            </div>
        
            <div className={classes.socials}>
                <h4>FB</h4>
                <h4>TW</h4>
                <h4>IG</h4>
            </div>
        </div>

    </div>
  )
}

export default footer