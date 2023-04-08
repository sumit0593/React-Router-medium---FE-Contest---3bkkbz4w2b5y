import React from 'react'
import { Switch,Route} from 'react-router-dom';

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'


export const AppRoutes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/bgcolor/:colorname" component={BackgroundColorChanger}/>
            <Route path="/calculator" component={Calculator}/>
        </Switch>

    );
};

export default AppRoutes;
