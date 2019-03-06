import {connect} from 'react-redux'
import UserList from './UserList'
import {user_list} from '../actions/user'
import setUsers from '../actions'

function mapStateToProps(state){
	return {
  	users: state.users
  }
}

export default connect(mapStateToProps, {user_list, setUsers})(UserList)