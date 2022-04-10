import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated,user }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
        
    };

   

   

    if (isAuthenticated ) {
        console.log(user)

        if(user){

             if(!user.is_staff){
            return <Redirect to='/Main' />
        }
        else{
            return <Redirect to='/admin' />
        }
        }
       
       
        
    }

    

    return (
        <div className='container mt-5'>
            <h3>Log in</h3>
            <form onSubmit={e => onSubmit(e)}>
            <div ClassName="row">
            <div ClassName="col-md-6 col-10 mx-auto">
                <div className='mb-3'>
                <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Please enter registered email:'
                        id="exampleFormControlInput1"
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='mb-3'>
                <label for="exampleFormControlInput1" className="form-label">Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password:'
                        id="exampleFormControlInput1"
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn ' type='submit'>Login</button>
                
                </div>
                </div>
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
    user: state.auth.user
});

export default connect(mapStateToProps, { login })(Login);
