import React from 'react';
import classes from './interested.module.css';

const interested = () => {
  return (
    <div className={classes.interested}>
        <div className={classes.text}>
            <h2>Interested to work with us ?</h2>
            <p>Send a line here get and update daily</p>
        </div>

        <div className={classes.btn}>
            <button>DaCode@example.com</button>
        </div>
    </div>
  )
}

export default interested