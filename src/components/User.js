import React, { Component} from 'react';
import PropTypes from 'prop-types'
import {user_del} from '../actions/user'
import { connect } from 'react-redux';

class User extends Component {
  static propTypes = {
    username : PropTypes.string,
    name : PropTypes.string,
    email : PropTypes.string,
    id: PropTypes.number
  }

  render() {
    const {username, name, email, id} = this.props
    return (
        <tr>
        <td>{username}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td style={{width: 100}}>
          <a href={"/modify/"+id.toString()} className="btn btn-info" role="button" style={{margin:4}}><i className="icons font-l d-block mt-0 cui-wrench"></i></a>
          <button className="btn btn-danger" value={id} onClick={this.props.user_del}><i className="icons font-l d-block mt-0 cui-trash"></i></button>
        </td>
      </tr>
    )
  }
}

// export default User

const mapDispatchToProps = {
  user_del: user_del,
}

export default connect(null, mapDispatchToProps)(User)