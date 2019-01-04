import React from "react";
import "./Register.css";

const Register = props => {
  return (
    <div className="register__container">
      <form className="register__form" onSubmit={props.addNewUser}>
        <h2 className="register__form__heading">Registration Details</h2>
        <div className="register__form__field">
          <span className="register__form__field__label">Username</span>
          <input
            className="register__form__field__text"
            type="text"
            name="username"
            placeholder="Enter a username"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">First Name</span>
          <input
            className="register__form__field__text"
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Last Name</span>
          <input
            className="register__form__field__text"
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Password</span>
          <input
            className="register__form__field__text"
            type="password"
            name="password"
            placeholder="Enter a secure password"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Email Address</span>
          <input
            className="register__form__field__text"
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Avatar Photo</span>
          <input
            className="register__form__field__text"
            type="text"
            name="avatar"
            placeholder="Enter a URL for your avatar photo"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Date Of Birth</span>
          <input
            className="register__form__field__text"
            type="date"
            name="dob"
            min="1940-01-01"
            max="2019-01-02"
            placeholder="Enter your date of birth"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Location</span>
          <input
            className="register__form__field__text"
            type="text"
            name="location"
            placeholder="Enter your location"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Credentials</span>
          <input
            className="register__form__field__text"
            type="text"
            name="creds"
            placeholder="Enter your credentials"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="register__form__field">
          <span className="register__form__field__label">Role list</span>
          <select
            className="register__form__field__text"
            name="role"
            onChange={props.handleChange}
            required
          >
            <option disabled selected value="">
              Select a role
            </option>
            <option value="advisee">I want to be an advisee</option>
            <option value="advisor">I want to be an advisor</option>
          </select>
        </div>
        <div
          className={
            props.selectedRole === "advisor"
              ? "register__form__field"
              : "register__form__field--hidden"
          }
        >
          <span className="register__form__field__label">
            Advisor specialty
          </span>
          <select
            className="register__form__field__text"
            name="specialty"
            onChange={props.handleChange}
            required={props.selectedRole === "advisor"}
          >
            <option disabled selected value="">
              Select a finance topic that you specialize in
            </option>
            <option value="taxes">Taxes</option>
            <option value="investing">Investing</option>
            <option value="estate">Estate Planning</option>
            <option value="financial">Financial Planning</option>
          </select>
        </div>

        <button className="register__form__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
