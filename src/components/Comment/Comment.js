import React from 'react';
import PropTypes from 'prop-types';

function Comment({authorName, authorEmail, content}) {
    return (
        <li key={authorName}>
            <div>
                <p>{content}</p>
                <p>From {authorName} <span>{"<"+authorEmail+">"}</span></p>
            </div>

        </li>
    );
}

Comment.propTypes = {
    authorName: PropTypes.string.isRequired,
    authorEmail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Comment;
