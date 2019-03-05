import {connect} from 'react-redux'
import UserList from './UserList'

export default connect(({users}) => ({users}))(UserList)