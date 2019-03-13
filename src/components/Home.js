import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchNewTime, login, logout} from '../redux/actionCreators';


const Home = (props) => {
    return (
        <div>
            <h1>Welcome home</h1>
            <p>Current time: {props.currentTime}</p>
            <button onClick={props.updateTime}>Update Time</button>
            <br/>
            <button onClick={props.login}>Login</button>
            <br/>
            <button onClick={props.logout}>Logoff</button>
            
            <Link to='/about'>Go to
               about</Link>
        </div>
    )
}
const mapStateToProps = state => {
    //assigns the state.currentTime to the currentTime prop of Home component
    debugger;
    return {
        currentTime: state.currentTime.currentTime
    }
}

const mapDispatchToProps = (dispatch) => {
    //assigns the updateTime function to the store.dispatch which triggers the reducer
    return  {
        updateTime: () => dispatch(fetchNewTime()),
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);