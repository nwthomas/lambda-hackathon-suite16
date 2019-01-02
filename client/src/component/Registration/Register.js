import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  addNewUser = e => {
    e.preventDefault();
    fetch('http://71.65.239.221:5000/api/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            data
          },
          () => console.log(this.state.data)
        )
      );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className='register_container'>
          <form onSubmit={this.addNewUser}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={this.handleChange}
            />
            <br />
            <input
              type='text'
              name='firstname'
              placeholder='First name'
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='lastname'
              placeholder='Last name'
              onChange={this.handleChange}
            />
            <br />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
            <br />
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={this.handleChange}
            />
            <br />
            <input
              type='text'
              name='avatar'
              placeholder='Avatar url'
              onChange={this.handleChange}
            />
            <br />
            {/* <input
              type='date'
              name='dob'
              min='1940-01-01'
              max='2019-01-02'
              onChange={this.handleChange}
            /> */}
            <input type='text' name='dob' onChange={this.handleChange} />
            <input
              type='text'
              name='location'
              placeholder='Location'
              onChange={this.handleChange}
            />
            <br />

            <input
              type='text'
              name='creds'
              placeholder='Credentials'
              onChange={this.handleChange}
            />
            <br />
            {/* <select name='cats' onChange={this.handleChange}>
              <option value='taxes'>Taxes</option>
              <option value='investing'>Investing</option>
              <option value='estate'>Estate Planning</option>
              <option value='financial'>Financial Planning</option>
            </select> */}

            <input type='text' name='cats' onChange={this.handleChange} />

            <input
              type='text'
              name='role'
              placeholder='Role'
              onChange={this.handleChange}
            />
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    );
  }
}
