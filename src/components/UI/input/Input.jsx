import React from 'react';
import classes from './Input.module.less';

export default function Input(props) {
  return (
    <input className={classes.input} {...props}/>
  );
}
