import React from 'react';

const Login = props => {
  return (
    <div>
      <div className='login__container'>
        <form className='login__form' onSubmit={props.logInUser}>
          <input
            className='login__username'
            type='text'
            name='username'
            placeholder='Username'
            handleChange={props.handleChange}
          />
          <input
            className='login__password'
            type='text'
            name='password'
            placeholder='Password'
            handleChange={props.handleChange}
          />
          <button type='submit'>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
