import React from 'react';
import {Route, Switch} from "react-router-dom";

import Phones from "./Components/Phones/Phones";
import Phone from "./Components/Phone/Phone";

 export default (
    <Switch>
        <Route path="/" exact component={Phones}/>
        <Route path="/phones/:id"  component={Phone}/>
    </Switch>
)