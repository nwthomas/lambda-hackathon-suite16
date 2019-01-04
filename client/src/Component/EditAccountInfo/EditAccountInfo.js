import React from "react";
import "./EditAccountInfo.css";

const EditAccountInfo = props => {
  const currentUser = props.profiles.filter(profile => profile._id === props._id)[0];

  return !currentUser ? (
    ""
  ) :  (
    <div className="user-edit__container">
      <form className="user-edit__form" onSubmit={props.editUser}>
        <h2 className="user-edit__form__heading">Edit User Details ({currentUser.username})</h2>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">First Name</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="firstname"
            value={currentUser.firstname}
            placeholder="Enter your first name"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Last Name</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="lastname"
            value={currentUser.lastname}
            placeholder="Enter your last name"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Password</span>
          <input
            className="user-edit__form__field__text"
            type="password"
            name="password"
            value={currentUser.password}
            placeholder="Enter a secure password"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Email Address</span>
          <input
            className="user-edit__form__field__text"
            type="email"
            name="email"
            value={currentUser.email}
            placeholder="Enter your email address"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Avatar Photo</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="avatar"
            value={currentUser.avatar}
            placeholder="Enter a URL for your avatar photo"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Date Of Birth</span>
          <input
            className="user-edit__form__field__text"
            type="date"
            name="dob"
            min="1940-01-01"
            max="2019-01-02"
            value={currentUser.dob}
            placeholder="Enter your date of birth"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Location</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="location"
            value={currentUser.location}
            placeholder="Enter your location"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Credentials</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="creds"
            value={currentUser.creds}
            placeholder="Enter your credentials"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">Role list</span>
          <select
            className="user-edit__form__field__text"
            name="role"
            value={currentUser.role}
            onChange={props.handleChange}
            required
          >
            <option disabled value="">
              Select a role
            </option>
            <option value="advisee">I want to be an advisee</option>
            <option value="advisor">I want to be an advisor</option>
          </select>
        </div>
        <div
          className={
            currentUser.role === "advisor"
              ? "user-edit__form__field"
              : "user-edit__form__field--hidden"
          }
        >
          <span className="user-edit__form__field__label">
            Advisor specialty
          </span>
          <select
            className="user-edit__form__field__text"
            name="specialty"
            value={currentUser.specialty}
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
        <button className="user-edit__form__button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAccountInfo;
