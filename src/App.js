import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Exercise1 from "./exercise1"
import Exercise2 from "./exercise2"

export default () =>
    <div className="ola">
        <section className="ola_ly-pageCenter">
            <Router>
                <Switch>
                    <Route exact path="/"><Main /></Route>
                    <Route path="/exercise1"><Exercise1 /></Route>
                    <Route path="/exercise2"><Exercise2 /></Route>
                </Switch>
            </Router>
        </section>
    </div>

const Main = () =>
    <section className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Link  to="/exercise1">Exercise 1</Link>
        <Link  to="/exercise2">Exercise 2</Link>
    </section>

