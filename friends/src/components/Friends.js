import React from 'react';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    render() {
        return (
            <div className='friends-container'>
            <p>FRIENDSFRIENDSFRIENDS</p>
            </div>
        )
    }
}


export default Friends;