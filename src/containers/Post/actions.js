import Api from '../../utils/Api'

export const FETCHED_POST = 'FETCHED_POST';
export const FETCHED_USER = 'FETCHED_USER';
export const FETCHED_COMMENTS = 'FETCHED_COMMENTS';
export const START_FETCH = 'START_FETCH';

export function fetchedPost(post) {
    return {
        type: FETCHED_POST,
        post
    }
}

export function fetchedUser(user) {
    return {
        type: FETCHED_USER,
        user
    }
}

export function fetchedComments(comments) {
    return {
        type: FETCHED_COMMENTS,
        comments
    }
}

export function startFetch() {
    return {
        type: START_FETCH
    }
}

export function fetchUser(userId){
    return (dispatch) => {

        Api.getUser(userId).then(data => {
            console.log(userId)
            dispatch(fetchedUser(data));
        }).catch(err => {
            console.error(err);
        });

    }
}

export function fetch(postId) {
    return (dispatch) => {

        /*
         * Pretty sure I need to get the user somewhere here
         */

        dispatch(startFetch());

        Api.getPost(postId).then(data => {
            dispatch(fetchedPost(data));
            dispatch(fetchUser(data.userId))
        }).catch(err => {
            console.error(err);
        });

        Api.getPostComments(postId).then(data => {
            dispatch(fetchedComments(data));
        }).catch(err => {
            console.error(err);
        });

        /*
         * What if comments promise fail ??
         */
    }
}
