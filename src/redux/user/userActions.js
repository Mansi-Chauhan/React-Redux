import axios from 'axios'
import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userTypes'

export const fetchUsersRequest=()=>{
    console.log('fetchUsersRequest')
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess=(users)=>{
    console.log('fetchUsersSuccess')
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure=(error)=>{
    console.log('fetchUsersFailure')
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


// ASYNC ACTION CREATOR(using thunk middleware)

export const fetchUser=()=>{
    console.log('here')
    return (dispatch) =>{
        console.log('guiguigi')
        // const t=dispatch(fetchUsersRequest)
        // console.log(t,'jjugu')
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>
            {const users = response.data;
                console.log(response)
            dispatch(fetchUsersSuccess(users));
            })
        .catch(error=>{
            
            const er = error.message
            console.log('er',er)
            dispatch(fetchUsersFailure(er))
        })
    }
}