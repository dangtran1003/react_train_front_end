import {USER_ADD, USER_API, USER_DEL, USER_LIST, USER_MOD,
BASE_URL, USER_ADD_SUCCESS, USER_ADD_FAIL } from '../constants/user'
const user_add = (username, email, name) => dispatch => {
    dispatch({type:USER_ADD})
    Request.post(USER_API.USER_ADD, {username, email, name})
    .then(({status, data: {data, error}}) => {
        switch (Number(error.code))
        {
            case 0:
                dispatch({type: USER_ADD_SUCCESS, data: "Thêm user thành công!"})
                break
            default:
                break
        }
    })
    .catch(error => {
        console.log(error)
    })
}


export function setUsers(users){
    return {
        type: USER_LIST,
        users
    }
}