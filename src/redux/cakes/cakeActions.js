import {BUY_CAKE} from './cakeTypes'

// just setting default functionality to work, so that code doesnt break
export const buyCake = (number=1) =>{
    return{
        // type:'BUY_CAKE'
        type:BUY_CAKE,
        payload: number
    }
}