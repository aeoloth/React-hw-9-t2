import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Posts(props) {
    const history = useHistory();
  return (
      <div>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    <p>Visited pages: {history.length}</p>
    </div>
  );
}

export default Posts;