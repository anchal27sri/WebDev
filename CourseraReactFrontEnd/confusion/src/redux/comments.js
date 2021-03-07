import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    comments: [],
}, action) => {

    // console.log("Action payload: " + action.payload);
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };
            
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // console.log("Comments:", comment);
            return { ...state, errMess: null, comments: state.comments.concat(comment.comment)};
        default:
            return state;
    }
}

