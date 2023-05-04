import React from 'react';
import classes from './cases.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Circle2 from '../../assets/circle_l.png';
import Circle from '../../assets/circle_c.png';
import Interested from '../../components/interested/interested';
import Establish from '../../components/establish/establish';

const cases = () => {
  return (
    <div>
      <Header/>
      <div className={classes.saas}>
        <div className={classes.some}>
          <h2>Some of our SaaS clients</h2>
          <p>We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.</p>
        </div>

        <div className={classes.some2}>
          <div className={classes.circle}>
            <img src={Circle} alt='circle' />
          </div>

          <div className={classes.boxes}>
            <div className={classes.bg}>
            </div>
              <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.lunar}>
                  <h3>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h3>
                  <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
                </div>
              </div>
            
          </div>
          <div className={classes.circle2}>
            <img src={Circle2} alt='circle' />
          </div>

          <span><div className={classes.boxes}>
            <div className={classes.bg}>
            </div>
              <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.lunar}>
                  <h3>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h3>
                  <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
                </div>
              </div>
            
          </div></span>

          <div className={classes.boxes}>
            <div className={classes.bg}>
            </div>
              <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.lunar}>
                  <h3>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h3>
                  <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
                </div>
              </div>
            
          </div>

            <div className={classes.circle3}>
              <img src={Circle} alt='circle' />
            </div>

            <div className={classes.boxes}>
            <div className={classes.bg}>
            </div>
              <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.lunar}>
                  <h3>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h3>
                  <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
                </div>
              </div>
            
          </div>

          <div className={classes.circle4}>
            <img src={Circle2} alt='circle' />
          </div>

        </div>
          <Interested/>
          <Establish/>
          <Footer/>
      </div>
      
    </div>
  )
}

export default cases