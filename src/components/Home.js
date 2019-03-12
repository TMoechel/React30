import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchNewTime} from '../redux/actionCreators';


const Home = (props) => {
    return (
        <div>
            <h1>Welcome home</h1>
            <p>Current time: {props.currentTime}</p>
            <button onClick={props.updateTime}>Update Time</button>
            <Link to='/about'>Go to
               about</Link>
        </div>
    )
}
const mapStateToProps = state => {
    //assigns the state.currentTime to the currentTime prop of Home component
    return {
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        updateTime: () => dispatch(fetchNewTime())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);