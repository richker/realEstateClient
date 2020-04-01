import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import PredictView from "./components/predictView";
import Data from "./components/data";
import About from "./components/about";
import Models from "./components/models";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
    state = {};

    async componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer/>
                <NavBar />
                <div className="body">
                    <Switch>
                        <Route path="/predict" component={PredictView}/>
                        <Route path="/data" component={Data}/>
                        <Route path="/models" component={Models}/>
                        <Route path="/about" component={About}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/" exact to="/predict"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
