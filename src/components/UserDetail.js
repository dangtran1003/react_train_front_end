import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { user_detail } from '../actions/user';

class UserDetail extends Component {
  static propTypes = {
    email : PropTypes.string,
    name : PropTypes.string,
  }
  state = {
      email: '',
      name : '',
      error : ''
  }

  componentDidMount() {
     this.props.dispatch(user_detail(this.props.match.params.id))
  }

  render() {
    return (
        <div className="card">
            <div className="card-header">
                <strong>Horizontal</strong> Form
            </div>
            <div className="card-body">
                <form className="form-horizontal" action="" method="post">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-email">Email</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-email" type="email" name="hf-email" value={this.props} autoComplete="email"/>
                        <span className="help-block">Please enter your email</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-password">Name</label>
                        <div className="col-md-9">
                            <input className="form-control" id="hf-password" type="text" name="hf-password" value={this.props} autoComplete="current-password"/>
                            <span className="help-block">Please enter your name</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-primary" type="submit">
                    <i className="fa fa-dot-circle-o"></i> Submit</button>
                <button className="btn btn-sm btn-danger" type="reset">
                    <i className="fa fa-ban"></i> Reset</button>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
    user: state.data.user
  })
  
  export default connect(mapStateToProps, null)(UserDetail)