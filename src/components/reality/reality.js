import React from 'react';
import classes from './reality.module.css';
import Working from '../../assets/Illustration.png';

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
                
                {/* <div className={classes.numText}>
                    <div className={classes.num}>
                        <h2>1</h2>
                    </div>

                    <div className={classes.text}>
                        <h2>Your Idea</h2>
                        <p>In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
                    </div>

                </div> */}

            </div>
            <div className={classes.image}>
                <img src={Working} alt='working' />
            </div>
            
        </div>
    </div>
  )
}

export default reality