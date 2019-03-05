import React, {Component} from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import '../App.css';
import User from './User'
import {user_list} from '../actions/user'

class UserList extends Component{
  // componentDidMount(){
  // 	this.props.user_list('',1,10)
  // }
    static propTypes = {
        users : PropTypes.array
    }

    static defaultProps = {
        users : []
    }
    render(){
      console.log(this.props)
      const users = [{username:'xhuiklm10',email:'thdang1003@gmail.com',name:'Tran Hai Dang'},
      {username:'xhuiklm10',email:'thdang1003@gmail.com',name:'Tran Hai Dang'}]
        return (
          <div class="card">
          <div class="card-header">
            <i class="fa fa-align-justify"></i> Danh sách người dùng</div>
          <div class="card-body">
            <table class="table table-responsive-sm table-bordered table-striped table-sm">
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
                  //  this.props.users.map((user, key) => {
                   users.map((user, key) => {
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
                    <span class="badge badge-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">Prev</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        )
    }
}
function mapStateToProps(state){
	return {
  	users: state.users
  }
}

export default connect(mapStateToProps, {user_list})(UserList)