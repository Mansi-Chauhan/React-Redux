import React ,{useEffect} from 'react';
import {connect } from 'react-redux';
import {fetchUser} from '../redux'

function UserContainer(props) {
    console.log(props)
    useEffect(()=>{
            props.fetchUsers()
    },[])
    console.log(props)
    return (
        props.userData.loading ? (
            <h2>Loading</h2>
        ) : props.userData.error ? (
            <h2>{props.userData.error}</h2>
        ) :
        (
            <div>
                <h2>USER LIST</h2>
                <div>
                {props.userData && 
                props.userData.users && 
                props.userData.users.map(user => <p>{user.name}</p>) }
                </div>
            </div>
        )

    );
}

const mapStateToProps = state =>{
    console.log(state,'yhuhu')
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);