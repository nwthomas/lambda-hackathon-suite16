import React from "react";
import "./Register.css";

const Register = props => {
  return (
    <div>
      <div className="register__container">
        <h1 className="form__title">Register</h1>
        <form className="register__form" onSubmit={props.addNewUser}>
          <input
            className="register__username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={props.handleChange}
          />
          <br />
          <input
            className="register__firstname"
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={props.handleChange}
          />
          <input
            className="register__lastname"
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={props.handleChange}
          />
          <br />
          <input
            className="register__password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.handleChange}
          />
          <br />
          <input
            className="register__email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={props.handleChange}
          />
          <br />
          <input
            className="register__avatar"
            type="text"
            name="avatar"
            placeholder="Avatar url"
            onChange={props.handleChange}
          />
          <br />
          <input
            className="register__dob"
            type="date"
            name="dob"
            min="1940-01-01"
            max="2019-01-02"
            onChange={props.handleChange}
          />
          {/* <input
            className='register__dob'
            type='text'
            name='dob'
            onChange={props.handleChange}
          /> */}
          <input
            className="register__location"
            type="text"
            name="location"
            placeholder="Location"
            onChange={props.handleChange}
          />
          <br />

          <input
            className="register__credentials"
            type="text"
            name="creds"
            placeholder="Credentials"
            onChange={props.handleChange}
          />
          <br />
          {/* <select className="register__role-list" name='cats' onChange={props.handleChange}>
            <option value='taxes'>Taxes</option>
            <option value='investing'>Investing</option>
            <option value='estate'>Estate Planning</option>
            <option value='financial'>Financial Planning</option>
          </select> */}

          <input
            className="register__role-list"
            type="text"
            name="cats"
            onChange={props.handleChange}
          />

          <input
            className="register__role-input"
            type="text"
            name="role"
            placeholder="Role"
            onChange={props.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
