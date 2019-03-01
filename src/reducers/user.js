import { USER_ADD, USER_LIST, USER_ADD_FAIL, USER_ADD_SUCCESS, USER_DEL, USER_MOD_SUCCESS
, USER_MOD_FAIL } from "../constants/user";

const initialState = {
    notification : null,
    error: null
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST:
            return setUsers(state, action)
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
    }
}
function setUsers(state, action){
    const {users} = action;
    return [...state, ...users]
}
export default UserReducer