import { RECEIVE_COMMENTS, REMOVE_COMMENT, VOTE_COMMENT, ADD_COMMENT, EDIT_COMMENT } from '../actions/comments'

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...action.comments
      };
    case ADD_COMMENT:
      const { comment } = action;
      return {
        ...state,
        [comment.id]: comment,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...state[action.comment.id],
          body: [action.comment.id].body,
          timestamp: [action.comment.id].timestamp,
        }
      };
    case REMOVE_COMMENT:
      let newState = {};
      Object.keys(state).map(key => key !== action.id ? newState[key] = state[key] : null);
      return { ...newState }
    case VOTE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.option === "upVote"
            ? state[action.id].voteScore += 1
            : state[action.id].voteScore -= 1
        }
      }
    default:
      return state
  }
}