import React from 'react';
import classes from './reality.module.css';
import Working from '../../assets/Illustration.png';
import Circle from '../../assets/services_circle.png';

// const ideas = [
//     'Your Idea',
//     'Strategy meeting',
//     'Agile and Scrum framework',
//     'Your website goes live'];
// const descriptions = [
//     'In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.',
//     ''

// ]

const reality = () => {
  return (
    <div className={classes.reality}>
        <div className={classes.textImage}>
            <div className={classes.text}>
                <h2>Your idea into <span>reality</span></h2>
                <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
                
                <div className={classes.numText}>
                    <div className={classes.num}>
                        <h2>1</h2>
                    </div>

                    <div className={classes.text2}>
                        <h2>Your Idea</h2>
                        <p>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
                    </div>

                </div>

                <div className={classes.numText}>
                    <div className={classes.num}>
                        <h2>2</h2>
                    </div>

                    <div className={classes.text2}>
                        <h2>Strategy meeting</h2>
                        <p>This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>
                    </div>

                </div>

                <div className={classes.numText}>
                    <div className={classes.num}>
                        <h2>3</h2>
                    </div>

                    <div className={classes.text2}>
                        <h2>Agile and Scrum framework</h2>
                        <p>In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>
                    </div>

                </div>

                <div className={classes.numText}>
                    <div className={classes.num}>
                        <h2>4</h2>
                    </div>

                    <div className={classes.text2}>
                        <h2>Your website goes live</h2>
                        <p>The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.</p>
                    </div>

                </div>

            </div>
            <div className={classes.image}>
                <img src={Working} alt='working' />
            </div>
            
        </div>

        <div className={classes.circle}>
            <img src={Circle} alt='circle' />
        </div>
    </div>
  )
}

export default reality