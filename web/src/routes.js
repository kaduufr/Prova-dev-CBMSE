import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Pessoa from './pages/Pessoa/HomePessoa'
import EditarPessoa from './pages/Pessoa/EditarPessoa'
import CriarPessoa from './pages/Pessoa/CriarPessoa'
import Home from './pages/Home'
import CriarContato from './pages/Contato/CriarContato'
import EditarContato from './pages/Contato/EditarContato'

const Routes = () =>{
    return  (
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={CriarPessoa} path="/pessoa/new" />
            <Route component={Pessoa} exact path="/pessoa/:name" />
            <Route component={EditarPessoa} path="/pessoa/:name/editar" />
            <Route component={CriarContato} path="/contato/:name/adicionar" />
            <Route component={EditarContato} path="/contato/:name_contato/editar" />
            <Route path="*" >
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes