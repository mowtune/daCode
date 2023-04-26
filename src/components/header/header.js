import React from 'react';
import classes from './header.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.inner}>
          <div className={classes.logo}>
              <img src={Logo} alt='logo'/>
          </div>
          <ul className={classes.navbar}>
              <li>
                <Link to="/" className={classes.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={classes.navLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/specialists" className={classes.navLink}>
                  Case
                </Link>
              </li>
              <li>
                <Link to="/specialists" className={classes.navLink}>
                  DaCode Specialists
                </Link>
              </li>
              <li>
                <Link to="/blog" className={classes.navLink}>
                  Blog
                </Link>
              </li>
              <li>
                <button>Request a quote</button>
              </li>

          </ul>
        </div>
        
    </div>
  )
}

export default header