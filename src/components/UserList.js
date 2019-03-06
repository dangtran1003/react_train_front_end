import React, {Component} from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import '../App.css'
import User from './User'
import {user_list, setUsers} from '../actions/user'


class UserList extends Component{
    static propTypes = {
        users : PropTypes.array
    }

    static defaultProps = {
      users : [{username:'xhuiklm10',email:'thdang1003@gmail.com',name:'Tran Hai Dang'},
      {username:'xhuiklm10',email:'thdang1003@gmail.com',name:'Tran Hai Dang'}]
    }
    render(){
      console.log(this.props)      
        return (
          <div className="card">
          <div className="card-header">
            <i></i> Danh sách người dùng</div>
          <div className="card-body">
            <table className="table table-responsive-sm table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date registered</th>
                </tr>
              </thead>
              <tbody>
                {
                   this.props.users.map((user, key) => {
                  //  users.map((user, key) => {
                    const {username, email, name} = user
                    return (
                      <User username={username} email={email} name = {name} key={key}></User>
                    )
                  })
                }
                <tr>
                  <td>Vishnu Serghei</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">Prev</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        )
    }
}

export default UserList