// import React , { Component} from 'react' ;

// import './style.css'

import React, { useState , useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const LogIn = ({ login , isAuthenticated , isLogin}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    useEffect(
        () => {
            if(isLogin === null) {
                return ;
            }
            if(isLogin){
                return ;
            }
            else{
                alert('E-mail and password did not match .. note: if your email is not activated yet , go to your email to verify it first');
            }
        }
        , [isLogin] 
      )

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (email !== 'undefined' && password !== 'undefined') {
            login(email, password);
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   isLogin: state.auth.isLogin
});

export default connect(mapStateToProps , { login})(LogIn);






	