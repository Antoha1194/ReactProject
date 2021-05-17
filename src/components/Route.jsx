import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout.jsx';


export default class Router extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/'>
                    <Layout showProfile={true} />
               </Route>
               <Route exact path='/chat/1/'>
                    <Layout chatId={ 1 } />
                </Route>
               <Route exact path='/chat/2/'>
                    <Layout chatId={ 2 } />
               </Route>
               <Route exact path='/chat/3/'>
                    <Layout chatId={ 3 } />
                </Route> 
                <Route exact path='/profile/'>
                    <Layout showProfile={true} />
                </Route>     
           </Switch>
       )
   }
}
