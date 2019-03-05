import React, { Component} from 'react';
import PropTypes from 'prop-types'

export default class User extends Component {
  static propTypes = {
    username : PropTypes.string,
    name : PropTypes.string,
    email : PropTypes.string
  }

  _play() {
    this.props.play(this.props.track);
  }

  render() {
    const {username, name, email} = this.props
    return (
        <tr>
        <td>{username}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            <span class="badge badge-success">Active</span>
        </td>
      </tr>
    )
  }
}