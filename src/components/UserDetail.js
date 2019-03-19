import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { user_detail, change_detail } from '../actions/user';

export class UserDetail extends Component {
  static propTypes = {
    email : PropTypes.string,
    name : PropTypes.string,
  }
  state = {
      email: '',
      name : '',
      error : ''
  }

  componentWillMount() {
     this.props.UserDetail(this.props.match.params.id)
  }
  handleFormChange = e =>{
       const name = e.target.name
       const value = e.target.value
       this.setState({
        [name] :value
      }) 
   }
   handleSubmit = e =>
        {
            this.props.ChangeDetail(this.props.match.params.id, this.state.email, this.state.name)
        }

  render() {
    return (
        <div className="card">
            <div className="card-header">
                <strong>Cập nhật thông tin nhân viên <i>{this.props.user.username}</i></strong>
            </div>
            <div className="card-body">
                <form className="form-horizontal">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-email">Email</label>
                        <div className="col-md-9">
                        <input className="form-control"  type="email" name="email" onChange={this.handleFormChange} autoComplete="email" placeholder={this.props.user.email}/>
                        <span className="help-block">Please enter your email</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-password">Name</label>
                        <div className="col-md-9">
                            <input className="form-control" type="text" name="name" onChange={this.handleFormChange} placeholder={this.props.user.name}/>
                            <span className="help-block">Please enter your name</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-primary" onClick={this.handleSubmit}>
                    <i className="fa fa-dot-circle-o"></i> Submit</button>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.data.user
  })

function mapDispatchToProps(dispatch) {
    return {
        UserDetail : (id) => {
            dispatch(user_detail(id))
        },
        ChangeDetail : (id, email, name) => {
            dispatch(change_detail(id, email, name))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)