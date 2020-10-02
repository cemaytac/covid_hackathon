import React, { Component } from 'react'
import PostCard from '../../components/PostCard/PostCard'

class ViewPosts extends Component {
    state = {}
    render() {
        return (
            <>
                <h2>
                    View All Posts in the last 24 hours
            </h2>
                <PostCard />
            </>
        );
    }
}

export default ViewPosts;
