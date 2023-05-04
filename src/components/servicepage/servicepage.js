import React from 'react';
// import classes from './services.module.css';
import classes from './servicepage.module.css';
import Ellipse from '../../assets/Ellipse 633.png';
import Site from '../../assets/web-site.png';
import Arrow from '../../assets/arrow.png';
import PlugIn from '../../assets/plugin.png';
import Redesign from '../../assets/redesign.png';
import Opt from '../../assets/optimization.png';
import Engine from '../../assets/engine.png';
import Layer from '../../assets/layers.png';
import ServiceCircle from '../../assets/services_circle.png';

const services = () => {
  return (
    <div className={classes.services}>
        <div className={classes.bg}>
        <div className={classes.our}>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
        </div>
        <div className={classes.cards}>
            <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={Site} alt='site' />
                </div>
                <div className={classes.text}>
                    <h3>WordPress Site</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                        <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                        </div>
                        
                </div>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.greenLine}></div>
            <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={PlugIn} alt='plugin' />
                </div>
                <div className={classes.text}>
                    <h3>WordPress Plugin</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                    <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                    </div>
                </div>
                </div>
            </div>
                
            <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={Redesign} alt='redesign' />
                </div>
                <div className={classes.text}>
                    <h3>Website Redesign</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                    <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                    </div>
                </div>
                </div>
            </div>
      
            <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={Opt} alt='opt' />
                </div>
                <div className={classes.text}>
                    <h3>WordPress Site Optimization</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                        <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                        </div>
                        
                </div>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.greenLine}></div>
            <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={Engine} alt='engine' />
                </div>
                <div className={classes.text}>
                    <h3>Search Engine Optimization</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                    <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                    </div>
                </div>
                </div>
            </div>
                
            <div className={classes.card}>
                <div className={classes.greenLine}></div>
                <div className={classes.web}>
                <div className={classes.image1}>
                    <img src={Ellipse} alt='ellipse' />
                </div>
                <div className={classes.image2}>
                    <img src={Layer} alt='layer' />
                </div>
                <div className={classes.text}>
                    <h3>Cross Platform Mobile App</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p>
                    <div className={classes.more}>
                        <h5> Read More</h5>
                        <img src={Arrow} alt='arrow' /> 
                    </div>
                </div>
                </div>
            </div>

        </div>
                
        </div>
                <div className={classes.serviceCircle}>
                    <img src={ServiceCircle} alt='servicecircle' />
                </div>

    </div>
  )
}

export default services