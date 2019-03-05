import {USER_ADD, USER_API, USER_DEL, USER_LIST, USER_MOD,
BASE_URL, USER_ADD_SUCCESS, USER_ADD_FAIL, USER_LIST_SUCCESS } from '../constants/user'
import axios from 'axios'

const user_add = (username, email, name) => dispatch => {
    dispatch({type:USER_ADD})
    axios.post(USER_API.USER_ADD, {username, email, name})
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

const user_list = (key, first, last) => dispatch =>{
    dispatch({type:USER_LIST})
    axios.post(USER_API.USER_LIST, {key, first, last})
    .then(({status, data: {data, error}}) =>
    {
        switch (Number(error.code))
        {
            case 0:
                dispatch({type:USER_LIST_SUCCESS, payload: data})
                break
            default:
                break
        }
    })
}
export {
    user_add,user_list
}
export function setUsers(data){
    return {
        type: USER_LIST_SUCCESS,
        payload : data
    }
}