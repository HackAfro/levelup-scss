//action-type
import { createStore } from 'redux';

export const LIKE_TWEET = "[Tweet] like user's tweet";
export const RETWEET_TWEET = '[TWEET] retweet a tweet';
export const DELETE_TWEET = '[TWEET] delete a tweet';
let id = 0;


const initialState = {
  tweets: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_TWEET:
      return Object.assign(
        state,
        {},
        {
          tweets: state.tweets.concat(action.payload),
        }
      );
    case RETWEET_TWEET:
      return Object.assign(
        state,
        {},
        {
          tweets: state.tweets.concat(action.payload),
        }
      );
    case DELETE_TWEET:
      return {
        tweets: state.tweets.filter(
          (tweet) => tweet.id !== action.payload.id
        ),
      };
    default:
      return state;
      break;
  }
}

export const store = createStore(reducer, initialState);
