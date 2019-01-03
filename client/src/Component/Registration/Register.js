import React from 'react';
import './Register.css';

const Register = props => {
  console.log(props.state);
  return (
    <div className='register__container'>
      <form className='register__form' onSubmit={props.addNewUser}>
        <h2
          className='register__form__heading'>
          Registration Details
        </h2>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Username
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='username'
            placeholder='Enter a username'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            First Name
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='firstname'
            placeholder='Enter your first name'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Last Name
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Password
          </span>
          <input
            className='register__form__field__text'
            type='password'
            name='password'
            placeholder='Enter a secure password'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Email Address
          </span>
          <input
            className='register__form__field__text'
            type='email'
            name='email'
            placeholder='Enter your email address'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Avatar Photo
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='avatar'
            placeholder='Enter an image URL for your avatar photo'
            onChange={props.handleChange}
          />
        </div>
        {/* <input
        className="register__dob"
          type='date'
          name='dob'
          min='1940-01-01'
          max='2019-01-02'
          onChange={props.handleChange}
        /> */}
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Date Of Birth
          </span>
          <input
            className='register__form__field__text'
            type='date'
            name='dob'
            min='1940-01-01'
            max='2019-01-02'
            placeholder='Enter your date of birth'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Location
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='location'
            placeholder='Enter your location'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Credentials
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='creds'
            placeholder='Enter your credentials'
            onChange={props.handleChange}
          />
        </div>
        {/* <select className="register__role-list" name='cats' onChange={props.handleChange}>
          <option value='taxes'>Taxes</option>
          <option value='investing'>Investing</option>
          <option value='estate'>Estate Planning</option>
          <option value='financial'>Financial Planning</option>
        </select> */}

        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Role list
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='cats'
            placeholder='Select from a list of roles'
            onChange={props.handleChange}
          />
        </div>
        <div
          className="register__form__field"
        >
          <span
            className='register__form__field__label'
          >
            Role input
          </span>
          <input
            className='register__form__field__text'
            type='text'
            name='role'
            placeholder='Provide a role input'
            onChange={props.handleChange}
          />
        </div>
        <button className="register__form__button" type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
