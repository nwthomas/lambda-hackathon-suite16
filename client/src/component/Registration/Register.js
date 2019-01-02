import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      avatar: '',
      location: '',
      creds: '',
      cats: '',
      role: ''
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='register_container'>
          <form>
            <input type='text' name='username' placeholder='Username' />
            <br />
            <input type='text' name='firstname' placeholder='First name' />
            <input type='text' name='lastname' placeholder='Last name' />
            <br />
            <input type='password' name='password' placeholder='Password' />
            <br />
            <input type='email' name='email' placeholder='Email' />
            <br />
            <input type='text' name='avatar' placeholder='Avatar url' />
            <br />
            <input type='date' name='dob' min='1940-01-01' max='2019-01-02' />
            <input type='text' name='location' placeholder='Location' />
            <br />

            <input type='text' name='creds' placeholder='Credentials' />
            <br />
            <select name='cats'>
              <option value='taxes'>Taxes</option>
              <option value='investing'>Investing</option>
              <option value='estate'>Estate Planning</option>
              <option value='financial'>Financial Planning</option>
            </select>

            <input type='text' name='role' placeholder='Role' />
            <div>
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
