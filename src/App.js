import React from 'react';
import {Route, Switch} from "react-router-dom";

import Phones from "./Components/Phones/Phones";

const routes = (
    <Switch>
        <Route path="/" exact component={Phones}/>
    </Switch>
)

function App() {
    return (
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">Sidebar</div>
                    <div className="col-md-9"> {routes}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
