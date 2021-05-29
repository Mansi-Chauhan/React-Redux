import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    // acces numOfcakes in redux store and store it in variable
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    // returns refernce to dispatch function from the redux store
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes-{numOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;