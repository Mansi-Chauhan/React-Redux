import React from 'react';
// import { buyCake } from '../redux/cakes/cakeActions';
import {buyIceCream} from '../redux'
import {connect} from 'react-redux' // for step 3
// 3 steps to dispatch action to access state

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number Of IceCream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    );
}

// Step1 - state from redux store is mapped to state in our component
// noe we can access in our component as props.numOfCakes
// NOte - if application grows, mapStateToProps defined in another file called selectors and only selected state passed after a lot of processing
const mapStateToProps = state => {
    // return state
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

// Step2 - map our dispatch of an action creator to our prop in our component
// now props.buyCake can be used to dispatch an action
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

// STep 3: to conect step1 func to step2 func in react component

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer);