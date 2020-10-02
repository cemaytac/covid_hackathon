import React, { Component } from 'react'
// import * as projectAPI from '../../services/projects-api'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddPost extends Component {
    state = {
        invalidForm: false,
        formData: {
            name: '',
            user: '',
            title: '',
            body: '',
            img: ''
        }
    }

    formRef = React.createRef()


    handleAddPost = async newPostData => {
        console.log("ADDPROJECT")
        // await postAPI.create(newPostData)
        //     .then(() => this.props.history.push(`/projects/${this.props.user._id}`))
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
                <h1>Add Project</h1>
                <Form className="form-div" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>
                        <Form.Label >Project Name</Form.Label><br></br>
                        <Form.Control name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <Form.Label >Project Description</Form.Label><br></br>
                        <Form.Control as='textarea' name="description" rows="5" cols="30" value={this.state.formData.description} onChange={this.handleChange} >
                            Project description...
                        </Form.Control>
                    </div><br />
                    <div>
                        <Form.Label >Mini Type <br /> (e.g., Games Workshop, Boardgame Mini, etc)</Form.Label><br></br>
                        <Form.Control name="hobby" type="text" value={this.state.formData.hobby} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <Form.Label >Date Started</Form.Label><br></br>
                        <Form.Control name="dateStarted" type="date" value={this.state.formData.dateStarted} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <Form.Label >Target Due Date</Form.Label><br></br>
                        <Form.Control name="targetDate" type="date" value={this.state.formData.targetDate} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <Form.Control as='select' name="public" onChange={this.handleChange} value={this.state.formData.public} required>
                            <option value="true">Public</option>
                            <option value="false">Private</option>
                        </Form.Control>
                    </div><br />
                    <div>
                        <Form.Control as='select' name="completed" onChange={this.handleChange} value={this.state.formData.completed} required>
                            <option value="true">Complete</option>
                            <option value="false">In Progress</option>
                        </Form.Control>
                    </div><br />
                    <Button
                        className='greenButton'
                        id='button'
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Project
                    </Button><br /><br /><br /><br />
                </Form>
            </>
        );
    }
}

export default AddPost;