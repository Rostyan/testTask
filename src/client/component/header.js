import React, { Component } from 'react'

export default class header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then(res => this.setState({  id: res.id, name: res.name }))
      .catch(err => err);
  }

  logout() {
    fetch('/api/logout', { method: 'GET' });
    this.setState({ role: '' });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
