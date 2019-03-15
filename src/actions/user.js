import {
    USER_ADD, USER_API, USER_DEL, USER_LIST, USER_MOD, USER_DETAIL, USER_DETAIL_SUCCESS,
    BASE_URL, USER_LIST_FAIL, USER_ADD_SUCCESS, USER_ADD_FAIL, USER_LIST_SUCCESS , USER_DEL_SUCCESS, USER_MOD_SUCCESS
} from '../constants/user'
import axios from 'axios'

const user_add = (username_post, email_post, name_post) => dispatch => {
    dispatch({ type: USER_ADD })
    axios.post(BASE_URL+USER_API.USER_ADD, { username: username_post, email: email_post, name: name_post })
        .then(({ status, data: { data, error} }) => {
            switch (Number(error.code)) {
                case 0:
                    const data_user = {username : username_post,email: email_post,name: name_post, id: data['id']}
                    dispatch(addUser(data_user))
                    break
                default:
                    alert('Username hoặc email đã tồn tại!')
                    dispatch({
                        type: USER_ADD_FAIL,
    
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const user_list = (key=null, offset=0, limit=10) => dispatch => {
    dispatch({ type: USER_LIST })
    axios.post(BASE_URL+USER_API.USER_LIST, { key, offset, limit })
        .then(({ status, data: { data, error, total_users } }) => {
            switch (Number(error.code)) {
                case 0:
                    dispatch(setUsers(data, total_users))
                    break
                default:
                    break
            }
        })
}

const user_del = e => dispatch => {
    dispatch({type: USER_DEL})
    const id_value = e.target.value
    axios.post(BASE_URL+USER_API.USER_DEL, {id : id_value})
    .then(({status, data: {data,error}}) => {
        switch (Number(error.code)){
            case 0:
                dispatch(delUser(id_value))
                break
            default:
                break
        }
    })
}

const change_detail = (id, email, name) => dispatch => {
    dispatch({type: USER_MOD})
    axios.post(BASE_URL + USER_API.USER_MOD , {id, email, name})
    .then(({status, data: {data, error}}) => {
        switch (Number(error.code)){
            case 0:
                dispatch(UserChange(id,email,name))
                window.location.href = "/list";
                break
            default:
                break
        }
    })
}

const user_detail = (key=null) => dispatch => {
    dispatch({type: USER_DETAIL})
    axios.post(BASE_URL+USER_API.USER_DETAIL, {id:key})
    .then(({status, data: {data, error}}) => {
        switch (Number(error.code)){
            case 0 :
                dispatch(User(data))
                break
            default:
                break
        }
    })
}
export {
    user_add, user_list, user_del, user_detail, change_detail
}

function UserChange(id, email, name)
{
    return {
        type: USER_MOD_SUCCESS,
        data : {id, email, name}
    }
}
export function User(data)
    {   
        return {
            type: USER_DETAIL_SUCCESS,
            user : data
        }
    }
export function delUser(value)
    {
        return {
            type: USER_DEL_SUCCESS,
            id : value
        }
    }
export function setUsers(data, total_users) {
    return {
        type: USER_LIST_SUCCESS,
        payload: data,
        total_users: total_users
    }
}

export function addUser(data) {
    return {
        type : USER_ADD_SUCCESS,
        payload : data
    }
}
export function getUsers() {
    return {
        type: USER_LIST
    }
}

export function getUsersFailure() {
    return {
        type: USER_LIST_FAIL
    }
}

export function fetchData(key, first, last) {
    return (dispatch) => {
        dispatch(getUsers())
        axios.post(USER_API.USER_LIST, { key, first, last })
            .then(({ status, data: { data, error } }) => {
                switch (Number(error.code)) {
                    case 0:
                        dispatch(setUsers(data))
                        break
                    default:
                        break
                }
            })

    }
}

