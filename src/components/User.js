import React, { Component} from 'react';
import PropTypes from 'prop-types'

class User extends Component {
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
        <td style={{width: 100}}>
          <a href="#" className="btn btn-info" role="button" style={{margin:4}}><i className="icons font-l d-block mt-0 cui-wrench"></i></a>
          <a href="#" className="btn btn-danger" role="button"><i className="icons font-l d-block mt-0 cui-trash"></i></a>
        </td>
      </tr>
    )
  }
}

export default User