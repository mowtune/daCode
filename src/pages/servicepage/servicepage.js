import React from 'react';
import Header from '../../components/header/header';
import classes from './servicepage.module.css';
import Servicepage from '../../components/servicepage/servicepage';
import Interested from '../../components/interested/interested';
import Footer from '../../components/footer/footer';
import Establish from '../../components/establish/establish';

const services = () => {
  return (
    <div>
        <Header/>
        <div className={classes.what}>
            <div className={classes.bigText}>
                <h2>What we can offer your SaaS Business</h2>
            </div>
            <div className={classes.smallText}>
                <p>We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.</p>
            </div>
        </div>
        <Servicepage/>
        <Interested/>
        <Establish/>
        <Footer/>
    </div>
  )
}

export default services