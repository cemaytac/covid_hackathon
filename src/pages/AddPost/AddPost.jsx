import React, { Component } from 'react'
import * as postAPI from '../../services/post-api'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddPost extends Component {
  state = {
    invalidForm: false,
    formData: {
      name: '',
      description: '',
      category: '',
      img: ''
    }
  }

  formRef = React.createRef()


  handleAddPost = async newPostData => {
    console.log("ADDPOST")
    await postAPI.create(newPostData)
      .then(() => this.props.history.push(`/posts/${this.props.user._id}`))
    console.log("POSTADDED")
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleAddPost(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  }

  render() {
    return (
      <>
        <h1>Add Post</h1>
        <Form className="form-div" ref={this.formRef} onSubmit={this.handleSubmit}>
          <div>
            <Form.Label >Post Title</Form.Label><br></br>
            <Form.Control name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
          </div><br />
          <div>
            <Form.Label >Post Description</Form.Label><br></br>
            <Form.Control as='textarea' name="description" rows="5" cols="30" value={this.state.formData.description} onChange={this.handleChange} required >
            </Form.Control>
          </div><br />
          <div>
            <Form.Label >Post Category</Form.Label><br></br>
            <Form.Control as='select' name="category" onChange={this.handleChange} value={this.state.formData.public} required>
              <option value="technology">Technology</option>
              <option value="supplies">School Supplies</option>
              <option value="clothing">Clothing</option>
              <option value="housing">Housing</option>
              <option value="monetary">Monetary</option>
            </Form.Control>
          </div><br />
          <div>
            <Form.Label style={{ padding: '5px' }}>Image Url</Form.Label>
            <Form.Control name="img" type="text" value={this.state.formData.url} onChange={this.handleChange} required />
          </div><br />
          <Button
            className='greenButton'
            id='button'
            type="submit"
            disabled={this.state.invalidForm}
          >
            Add Post
                    </Button><br /><br /><br /><br />
        </Form>
      </>
    );
  }
}

export default AddPost;