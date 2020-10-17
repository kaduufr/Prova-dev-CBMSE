import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Pessoa from './pages/Pessoa/HomePessoa'
import EditarPessoa from './pages/Pessoa/EditarPessoa'
import CriarPessoa from './pages/Pessoa/CriarPessoa'
import Home from './pages/Home'

const Routes = () =>{
    return  (
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={CriarPessoa} path="/pessoa/new" />
            <Route component={Pessoa} exact path="/pessoa/:id" />
            <Route component={EditarPessoa} path="/pessoa/:id/editar" />
            <Route path="*" >
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes