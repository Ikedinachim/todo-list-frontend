import React, { useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import classes from './RegisterPage.module.css';
import Input from '../../components/input/Input'
import PasswordInput from '../../components/password-input/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTasks } from '../../actions/TaskActions';
import { registerUser } from '../../actions/AuthActions';


const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const userNameRef = useRef()
    const {loading, isAuthenticated, data, error} = useSelector(state => state.auth)

    
    const registerNewUser = () => {
        console.log(emailRef.current.value, passwordRef.current.value)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(registerUser(JSON.stringify({
            email:email,
            password: password,
            userName: userNameRef.current.value,
            comfirmPassword: confirmPasswordRef.current.value
        })))


    }
    const signin = () =>  {
        navigate('/sign-in')
    }
    useEffect(() => {
        if(isAuthenticated){
            console.log(data);
            dispatch(getUserTasks());
            navigate('/dashboard');
    
          
    
        }
      }, [isAuthenticated])
      let errorText  = error && <p style={{color:'red'}}>{error+ '!'}</p>
    return (
        <div className={classes.page}>
            <section className={classes['section-one']}>
                <img src={logo} />
                <div className={classes['text-div']}>

                <p>
                Are you tired of feeling overwhelmed by your never-ending to-do list? Take control of your tasks and streamline your productivity with our powerful to-do application! Our user-friendly interface and customizable features make it easy to prioritize, organize, and complete your tasks efficiently.
                </p>
                </div>
            </section>
            <section className={classes['section-two']}>
                <div className={classes['sign-up-div']}>

                <h2>SIGN UP</h2>
                <Input type = 'email' placeHolder  = 'Email Address'  ref={emailRef}/>
                <Input type = 'text' placeHolder  = 'User Name' ref={userNameRef} />
                <PasswordInput placeHolder = 'Password' ref={passwordRef}/>
                <PasswordInput placeHolder = 'Confirm Password' ref={confirmPasswordRef}/>
                
                <button className={classes.btn} onClick={registerNewUser}>Continue</button>
                <div className={classes['act-div']}>
                    Already have an account? <span onClick={signin}>Login</span>
                </div>

                </div>
            </section>
        </div>
    );
};

export default RegisterPage;