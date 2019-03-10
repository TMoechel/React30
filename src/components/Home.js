import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Home = (props) => {
    return (
        <div>
            <h1>Welcome home</h1>
            <p>Current time: {props.currentTime}</p>
            <Link to='/about'>Go to
               about</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentTime: state.currentTime
    }
}


export default connect(mapStateToProps)(Home);