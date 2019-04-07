import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        // submitted: false
    }

    postDataHandler = () => {
        const postedData = {
            author: this.state.author,
            body: this.state.content,
            title: this.state.title
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', postedData)
            .then(response => {
                console.log(response);
                // this.setState({ submitted: true });
                this.props.history.push('/');
            })
    }

    render() {

        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to={'/'} />
        // }
        // lepsza metoda jest z this.props.history.push('/') po wysłaniu posta

        return (
            <div className="NewPost">

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="8" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                    <option value="Kris">Kris</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
                {/* {redirect} */}
            </div>
        );
    }
}

export default NewPost;