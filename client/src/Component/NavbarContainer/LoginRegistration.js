import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const LoginRegistration = props => {
  return (
    <div className='login__registration'>
      <button className='login__button navbar__button'>
        <NavLink to='/login'>Login</NavLink>
      </button>
      <button className='register__button navbar__button'>
        <NavLink to='/register'>Register</NavLink>
      </button>
    </div>
  );
};

export default LoginRegistration;

/* 

firstname={this.state.firstname}
              lastname={this.state.lastname}
              username={this.state.username}
              password={this.state.password}
              email={this.state.email}
              avatar={this.state.avatar}
              location={this.state.location}
              creds={this.state.creds}
              cats={this.state.cats}
              role={this.state.role}
              addNewUser={this.addNewUser}
              handleChange={this.handleChange}
*/
