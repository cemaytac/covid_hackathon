import React, { Component } from 'react'
import * as postAPI from '../../services/post-api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class ViewPosts extends Component {
  state = {
    post: {
    }
  }
  async componentDidMount() {
    const post = await postAPI.viewPosts(this.props.match.params.id)
    console.log(post)
    this.setState({ post })
  }
  render() {
    const post = this.state.post
    const user = this.props.user
    return (
      <>
        <h1>{post.name}</h1>
        <Container className="project-details-container">
          <Row id='project-row'>
            <p>Description: {post.description}</p>
          </Row>
        </Container>
      </>
    );
  }
}

export default ViewPosts;
