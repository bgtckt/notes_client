import React from 'react';
import classes from './Button.module.less';

export default function Button(props) {
  return (
    <button className={classes.btn} {...props} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
