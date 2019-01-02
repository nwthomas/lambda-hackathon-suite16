import React, { Component } from 'react';
import NavbarContainer from './Component/NavbarContainer/NavbarContainer';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Registration/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginVerified: false,
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
      <BrowserRouter className='App'>
        <div>
          <NavbarContainer
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
          />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
