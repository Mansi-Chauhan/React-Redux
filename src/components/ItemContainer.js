import React from 'react';
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

// either display number of cake or ice cream on basis of prop passed
function ItemContainer(props) {
    console.log(props)
    return (
        <div>
            <h2> Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    );
}

// ownProps -> properties of the component itself

const mapStateToProps =(state, ownProps) =>{
 const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
 return{
     item: itemState
 }
}

const mapDispatchToProps =(dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake 
    ? ()=>dispatch(buyCake()) 
    : ()=>dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
   }


export default connect(
    mapStateToProps,mapDispatchToProps
    )(ItemContainer);
// export default ItemContainer;