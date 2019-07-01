import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest()
    }, 1500);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input onChange={this.onUpdateUser}/>
          {this.props.user}
        </header>
      </div>
    );
  }
}

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest,
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.aRandomProp}`
})

export default connect(mapStateToProps, mapActionsToProps)(App);
