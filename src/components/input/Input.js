import React from 'react';
import classes from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <input placeholder={props.placeHolder} ref={ref} type={props.type} className={classes.inp} />
    );
});

export default Input;