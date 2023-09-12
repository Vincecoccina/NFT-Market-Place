import React from 'react';
import classes from "../../styles/Button.module.css"

const Button = (props) => {
  return (
    <button type='button' className={props.invert ? classes.invertBtn : classes.classicBtn}>{props.children}</button>
  )
}

export default Button