import React, {Component} from 'react'
// import { connect } from "react-redux";
import PropTypes from 'prop-types'
import '../App.css'
import User from './User'
import {user_list, user_add} from '../actions/user'
import { connect } from 'react-redux';

export class UserList extends Component{
    state = {
      username : '',
      email : '',
      name : '',
      error: '', 
      key_search: ''
    }

    handleSubmit = e => {
      // e.preventDefault()
      if (this.state.username.length !== 0 && this.state.email.length !== 0)
        this.props.UserAdd(this.state.username, this.state.email, this.state.name)
      else 
        {
          this.setState({error:'Thiếu username hoặc password!'})
          alert('Thiếu username hoặc password!')
        }
    }

    handleFormChange = e =>{
      const name = e.target.name
      const value = e.target.value
      this.setState({
        [name] :value
      })
      if (name === 'key_search')
      {
        this.props.UserList(value,this.props.match.params.page-1,10)
      }
    }
    static propTypes = {
        users : PropTypes.array,
        total_users: PropTypes.array
    }

    static defaultProps = {
      users : [],
      total_users: [1]
    }

    componentDidMount() {
        this.props.UserList(null, this.props.match.params.page - 1, 10)
    }


    render(){
        return (
          <div className="card">
          <div className="card-header">
            <i> Danh sách người dùng</i>
            </div>
           
            {this.props.error && alert(this.props.error)}
          <div className="card-body">
          <input className="form-control" type="text" name="key_search" onChange={this.handleFormChange} placeholder="Key search"/>
          <br></br>
            <table className="table table-responsive-sm table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th name='username'>Username</th>
                  <th name='name'>Name</th>
                  <th name='email'>Email</th>
                  <th name='options'>Options</th>
                </tr>
              </thead>
              <tbody>
                {
                   this.props.users.map((user, key) => {
                    const {id, username, email, name} = user
                    return (
                      <User username={username} email={email} name = {name} key={key} id={id}></User>
                    )
                  })
                }
                <tr>
                  <td><input className="form-control" name="username" type="text" placeholder="Enter your username" onChange={this.handleFormChange}></input></td>
                  <td><input className="form-control" name="name" type="text" placeholder="Enter your name" onChange={this.handleFormChange}></input></td>
                  <td><input className="form-control" name="email" placeholder="Enter your email" onChange={this.handleFormChange} type="email"></input></td>
                  <td>
                      <button href="#" className="btn btn-success" style={{margin:4}} onClick={this.handleSubmit}><i className="icons font-l d-block mt-0 cui-check" ></i></button>
                      <button href="#" className="btn btn-danger"><i className="icons font-l d-block mt-0 cui-trash"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href={'list/'+(Number(this.props.match.params.page)>1 ? (Number(this.props.match.params.page)-1).toString() : "") }>Prev</a>
                </li>
                <li className={"page-time" +(this.props.match.params.page === 1 ? " active" : "") }>
                  <a className="page-link" href="list/1">1</a>
                </li>
                {this.props.pages.map((page,key)=>{
                  return (
                    <li className={"page-time" +(this.props.match.params.page === page ? " active" : "") } key = {key}>
                  <a className="page-link" href={'list/' + page.toString()}>{page}</a>
                </li>
                  )
                })}
                <li className="page-item">
                  <a className="page-link" href={'list/'+(Number(this.props.match.params.page) +1).toString()}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
  users: state.data.users,
  pages: state.data.pages,
  error: state.data.error
})

function mapDispatchToProps(dispatch) {
  return {
   UserList: (key_search,numPages,numUsers) => {
    dispatch(user_list(key_search, numPages,numUsers))
   },
   
   UserAdd : (username, email, name) => {
     dispatch(user_add(username, email, name))
   }
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(UserList)