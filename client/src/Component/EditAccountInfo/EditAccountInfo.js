import React from "react";
import "./EditAccountInfo.css";

const EditAccountInfo = props => {
  const currentUser = props.profiles.filter(profile => profile._id === props._id)[0] || null;

  return !currentUser ? (
    ""
  ) :  (
    <div className="user-edit__container">
      <form className="user-edit__form" onSubmit={e => props.editUser(e, currentUser)}>
        <h2 className="user-edit__form__heading">Edit User Details ({currentUser.username})</h2>
        <div className="user-edit__form__field">
          <span className="user-edit__form__field__label">First Name</span>
          <input
            className="user-edit__form__field__text"
            type="text"
            name="firstname"
            placeholder={`Enter your first name (current: ${currentUser.firstname})`}
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
            placeholder={`Enter your last name (current: ${currentUser.lastname})`}
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
            placeholder={`Enter your email address (current: ${currentUser.email})`}
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
            placeholder={`Enter a URL for your avatar photo (current: ${currentUser.avatar})`}
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
            placeholder={`Enter your location (current: ${currentUser.location})`}
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
            placeholder={`Enter your credentials (current: ${currentUser.creds})`}
            onChange={props.handleChange}
            required
          />
        </div>
        <button className="user-edit__form__button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAccountInfo;
