import React, { Component } from 'react'

class Staff extends Component {
  constructor(){
    super();
    this.state = {
      currentName: "",
      currentUserEmail: ""
    }
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentName: idToken.idToken.claims.name,
      currentUserEmail: idToken.idToken.claims.email,
    });
  }
  render () {
    const { currentName, currentUserEmail } = this.state;
    return (
      <div>
        <h1> Welcome { currentName }</h1>
        <p> Email: { currentUserEmail } </p>
        <p> You have reached the authorized staff area of the portal </p>
      </div>
    )
  }
}

export default Staff