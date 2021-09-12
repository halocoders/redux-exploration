import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

const PostForm = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      body: body,
    };

    props.createPost(post);
  };

  return (
    <div>
      <h1>Adds Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label> <br />
          <input
            type="text"
            placeholder="title"
            style={{ fontSize: 18, padding: 5 }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label> <br />
          <textarea
            type="text"
            placeholder="add decription..."
            style={{ fontSize: 18, padding: 5 }}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" style={{ fontSize: 20, padding: 5 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(PostForm);
