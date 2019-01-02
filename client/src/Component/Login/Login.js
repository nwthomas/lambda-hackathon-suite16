import React from 'react';
import './Login.css';

const Login = props => {
  return (
    <div>
      <div className='login__container'>
        <form className='login__form' onSubmit={props.logInUser}>
          <h2
            className="login__form__heading">
            Log In
          </h2>
          <div
            className='login__form__field'
          >
            <span
              className='login__form__field__label'
            >
              Username
            </span>
            <input
              className='login__form__field__text'
              type='text'
              name='username'
              placeholder='Enter your username'
              handleChange={props.handleChange}
            />
          </div>
          <div
            className='login__form__field'
          >
            <span
              className='login__form__field__label'
            >
              Password
            </span>
            <input
              className='login__form__field__text'
              type='password'
              name='password'
              placeholder='Enter your password'
              handleChange={props.handleChange}
            />
          </div>
          <button 
            className='login__form__button'
            type='submit'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
