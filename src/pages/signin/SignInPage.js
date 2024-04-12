import React from 'react';
import logo from '../../assets/logo.svg';
import classes from './SignInPage.module.css';
import Input from '../../components/input/Input'
import PasswordInput from '../../components/password-input/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { useRef , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/AuthActions';
import { Button } from 'antd';
import { getUserTasks } from '../../actions/TaskActions';




const SignInPage = () => {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()

    const {loading, isAuthenticated, data, error} = useSelector(state => state.auth)

    const goToRegisterPage = () => {
        navigate('/register')
    }
    const signInUser = () => {
        console.log(emailRef.current.value, passwordRef.current.value)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(login(JSON.stringify({
            email:email,
            password: password,
        })))


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
                Boost your productivity and stay organized with our intuitive to-do app! Try it now and start conquering your tasks with ease.
                </p>
                </div>
            </section>
            <section className={classes['section-two']}>
                <div className={classes['sign-up-div']}>

                <h2>Welcome Back</h2>
                <form>
                <Input ref = {emailRef} type = 'text' placeHolder  = 'User Name' />
                <PasswordInput ref = {passwordRef} placeHolder = 'Password'/>

                </form>

                
                <Button loading = {loading} className={classes.btn} onClick={signInUser}>Continue</Button>
                <div className={classes['act-div']}>
                    Don't have an account? <span onClick={goToRegisterPage}>Create</span>
                </div>

                </div>
            </section>
        </div>
    );
};

export default SignInPage;