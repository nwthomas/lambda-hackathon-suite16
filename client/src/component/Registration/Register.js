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
            <input type='text' name='username' />
            <input type='text' name='firstname' />
            <input type='text' name='lastname' />
            <input type='password' name='password' />
            <input type='email' name='email' />
            <input type='text' name='avatar' />
            <input type='text' name='dob' />
            <input type='text' name='location' />
            <input type='text' name='creds' />
            <input type='text' name='cats' />
            <input type='text' name='role' />
          </form>
        </div>

        <div>
          <button>Login for now</button>
        </div>
      </div>
    );
  }
}
