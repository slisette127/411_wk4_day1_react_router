/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router'
// Write component imports here //
import Home from './components/Home'
import About from './components/About'



// Start Router function here //
const Router = () => {

    return (
        <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/About' component={ About }/>
        </Switch>
        )
}

export default Router;