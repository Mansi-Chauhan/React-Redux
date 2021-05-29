import { FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST } from "./userTypes"

const initialState={
    loader:false,
    users:[],
    error:''
}


const userReducer=(state=initialState,action)=>{
    console.log('hhhh',state)
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            loader: true
        }
        case FETCH_USERS_SUCCESS: return{
            ...state,
            loader: false,
            users:action.payload,
            error:''

        }

        case FETCH_USERS_FAILURE: return{
            ...state,
            loader: false,
            error:action.payload,
            
        }

        default: return state
    }
}


export default userReducer