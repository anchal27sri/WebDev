import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};

export const Feedback = (state = {
    errMess: null,
    feedbacks: [],
}, action) => {

    // console.log("Action payload: " + action.payload);
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            // console.log("Comments:", comment);
            return { ...state, errMess: null, feedbacks: state.feedbacks.concat(feedback.feedback)};
        default:
            return state;
    }
}