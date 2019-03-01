import React, {Component} from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class UserList extends Component{
    static propTypes = {
        list_user : PropTypes.array
    }

    static defaultProps = {
        list_user : []
    }
    render(){
        return (
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
                        this.props.list_user.map((user,key) => {
                            return <tr key={key}>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.date}</td>
                                    </tr>
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
        )
    }
}

export default connect(({users})=>({users}))(UserList)