import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App bg-dark">
                    <div className="container">
                        Hello from Dhriti Solutions!!
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;