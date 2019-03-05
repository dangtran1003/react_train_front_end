import { USER_ADD, USER_LIST, USER_ADD_FAIL, USER_ADD_SUCCESS, USER_DEL, USER_MOD_SUCCESS
, USER_MOD_FAIL, 
USER_LIST_SUCCESS} from "../constants/user";

const initialState = {
    notification : null,
    error: null,
    users : []
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST_SUCCESS:
            return setUsers(state, action.data)
        case USER_LIST:
            return setUsers(state, action.data)
        case USER_ADD:
            return {
                ...state,
            }
        case USER_ADD_FAIL:
            return {
                ...state
            }
        case USER_DEL:
            return {
                ...state
            }
        case USER_MOD_SUCCESS:
            return {
                ...state
            }
        case USER_MOD_FAIL:
            return {
                ...state
            }
        default:
            return { ...state}
    }
}
function setUsers(state, data){
    return {...state, users:data }
}
export default UserReducer