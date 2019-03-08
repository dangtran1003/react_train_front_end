import { USER_ADD, USER_LIST, USER_ADD_FAIL, USER_ADD_SUCCESS, USER_DEL, USER_MOD_SUCCESS
, USER_MOD_FAIL, USER_DEL_SUCCESS,
USER_LIST_SUCCESS,
USER_DETAIL,
USER_DETAIL_SUCCESS} from "../constants/user";
import { stat } from "fs";

const initialState = {
    notification : null,
    error: null,
    users : [],
    pages : [],
    total_users: 0,
    user : null
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST_SUCCESS:
            return setUsers(state, action.payload, action.total_users)
        case USER_LIST:
            return setUsers(state, action.payload)
        case USER_ADD_SUCCESS:
            state.users.push(action.payload)
            const pages = gen_page(state.total_users + 1)
            return {
                ...state,
                pages : pages,
                total_users: state.total_users + 1,
                error: null
            }
        case USER_ADD_FAIL:
            return {
                ...state
            }
        case USER_DEL:
            return {
                ...state
            }
        case USER_DEL_SUCCESS:
            var index = 0
            for(var i =0;i<state.users.length;i++)
                {
                    if (state.users[i].id==action.id_del)
                        {
                            index = i
                            break
                        }
                }
            state.users.splice(index,1)
            const new_pages = gen_page(state.total_users - 1)
            return {
                ...state,
                pages : new_pages,
                total_users: state.total_users - 1
            }
        case USER_MOD_SUCCESS:
            return {
                ...state
            }
        case USER_MOD_FAIL:
            return {
                ...state
            }
        case USER_DETAIL:
            return {
                ...state
            }
        case USER_DETAIL_SUCCESS:
            return {
                ...state,
                user : action.user
            }
        default:
            return { ...state}
    }
}

function gen_page(total){
    const num_page = Math.floor(total/10) + 1
    console.log(num_page)
    const pages = []
    for (let index = 2; index < num_page+1; index++) {
        pages.push(index)
    }
    return pages
}
function setUsers(state, data, total){
    const pages = gen_page(total)
    return {...state, users:data, pages:pages, total_users:total  }
}

export default UserReducer