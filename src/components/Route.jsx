import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout.jsx';


export default function Router(){
    return (
        <Switch>
            <Route exact path='/'>
                 <Layout showProfile={true} />
            </Route>
            <Route exact path='/chat/:id' component={Layout} />
             <Route exact path='/profile/'>
                 <Layout showProfile={true} />
             </Route>     
        </Switch>
    )
}