import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Link } from 'react-router-dom';

const Main = () => (
  <section className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <Link to="/exercise1">Exercise 1</Link>
    <Link to="/exercise2">Exercise 2</Link>
    <Link to="/exercise3">Exercise 3</Link>
  </section>
);

export default Main;
