import React from 'react';
import eye from '../../assets/eye.svg'
import classes from './PasswordInput.module.css'

const PasswordInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.container}>

            <input type='password' ref={ref} placeholder= {props.placeHolder} />
            <span><img src={eye} /></span>
        </div>
    );
});

export default PasswordInput;