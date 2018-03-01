import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import {fetch} from './actions';

class Post extends React.PureComponent {

    componentDidMount() {
        /* Well I don't know :/ */
        this.props.fetchPost(this.props.match.params.id);
    }

    renderCommentsList = () => {
        return this.props.comments.map(comment => {
            return <Comment authorName={comment.name}
                            authorEmail={comment.email}
                            content={comment.body}/>
        });
    };

    render() {

        const { post, user, comments } = this.props;

        if (post === null || user === null || comments === null) {
            return <p>Loading Post from API</p>;
        }

        return (
            <div>
                <h1>{ post.title }</h1>
                <p><i>By { user.name }, { user.company.name }, { user.address.city }</i></p>
                <p>{ post.body }</p>
                <h3>Comments</h3>
                <ul>
                    { this.renderCommentsList() }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        post:state.post.post,
        comments:state.post.comments,
        user:state.post.user,
    }


};

const mapDispatchToProps = (dispatch) => ({
    fetchPost: (postId) => dispatch(fetch(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
