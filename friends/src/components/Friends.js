import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then( res => this.setState({ friends: res.data }))
            .catch( err => this.setState({ error: err}));
    }

    render() {
        return (
            <div className='friends-container'>
            {this.state.friends.map(friend => (
                <div className='eachFriend'>
                    <h2> {friend.name} </h2>
                    <p><strong>Age:</strong> {friend.age} </p>
                    <p><strong>Email:</strong> {friend.email} </p>
                </div>
            ))}
            </div>
        )
    }
}


export default Friends;