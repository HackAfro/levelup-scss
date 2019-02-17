import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { store, DELETE_TWEET, LIKE_TWEET, RETWEET_TWEET } from './store';

const H1 = styled.h1`
  color: blue;
  margin: 20px 30px;
  text-transform: uppercase;
  margin-left: 200px;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 30px;
  transform: rotateZ(90deg);
  transition: 1s ease-in;
`;

let id = 0;
class App extends Component {
  state = {
    tweets: [],
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ tweets: store.getState().tweets });
    });
  }
  render() {
    const { tweets } = this.state;
    return (
      <div className="App">
        <H1>This is LevelUp Academy</H1>
        <Img src={logo} alt="the logo" />
        {tweets.map((tweet) => {
          return (
            <div>
              <h1>{tweet.user}</h1>
              <p>{tweet.tweet}</p>
              <button
                onClick={() =>
                  store.dispatch({ type: DELETE_TWEET, payload: tweet })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
        <button
          onClick={() =>
            store.dispatch({
              type: LIKE_TWEET,
              payload: {
                id: id++,
                tweet: 'The election was cancelled',
                user: 'Somotoye',
              },
            })
          }
        >
          Tweet
        </button>
        <button
          onClick={() =>
            store.dispatch({
              type: RETWEET_TWEET,
              payload: {
                id: id++,
                tweet: 'Something just happened',
                user: 'Kingsley',
              },
            })
          }
        >
          Retweet
        </button>
        <div className="alert alert-success">This is an alert</div>
      </div>
    );
  }
}

export default App;
