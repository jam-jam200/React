import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: <div>Error in displaying list</div>,
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    const postlist = posts.map((post) => <div key={post.id}>{post.title}</div>);
    return (
      <div>
        <h1>List of posts</h1>
        <h2>{postlist}</h2>
        <h4>{errorMsg}</h4>
      </div>
    );
  }
}

export default PostList;
