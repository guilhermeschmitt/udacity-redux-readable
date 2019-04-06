import { RECEIVE_POSTS, REMOVE_POST, VOTE_POST } from '../actions/posts'

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case REMOVE_POST:
      let newState = {};
      Object.keys(state).map(key => key !== action.id ? newState[key] = state[key] : null);
      return { ...newState }
    case VOTE_POST:
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
