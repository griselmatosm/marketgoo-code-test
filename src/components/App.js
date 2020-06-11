import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main'
import Exercise1 from "./Exercise1"
import Exercise2 from "./Exercise2"

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