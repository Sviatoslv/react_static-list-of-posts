import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = props => (
  <div className="post_comment">
    <p className="post__comment-body">{props.comment.body}</p>
    <p className="post__comment-author">
      <span>{props.comment.name}</span>
      <span>{props.comment.email}</span>
    </p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default Comment;