import React, { Component } from 'react'

class Invitation extends Component {
    state = {}
    render() {
        return (
            <>
                <h2>Invitation Page!</h2>
                <p>
                    plans:
                     <ul>
                        <li>can only see if you're logged in</li>
                        <li>generates a random string</li>
                        <li>with that string generation, generate new user profile</li>
                        <li>set sign up page FIND user and update rather than make a new one</li>
                    </ul>
                </p>
            </>
        );
    }
}

export default Invitation;