import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import MyButton from '../src/components/button';

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
class App extends Component {
  render() {
    return (
      <div className="App">
        <H1>This is LevelUp Academy</H1>
        <Img src={logo} alt="the logo" />
        <MyButton primary>My Button</MyButton>
        <div className="alert alert-success">This is an alert</div>
      </div>
    );
  }
}

export default App;
