import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import WhoWeAre from './pages/whoWeAre'
import Contact from './pages/contact'
import Arq from './pages/infoCourses/arq/'
import Com from './pages/infoCourses/com/'
import Aut from './pages/infoCourses/aut/'
import Ele from './pages/infoCourses/ele/'
import Blog from './pages/blog/'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={WhoWeAre} path='/Quem-somos-nos' />
            <Route component={Contact} path='/Contato' />
            <Route component={Arq} path='/servicos/Arquitetura' />
            <Route component={Com} path='/servicos/Computacao' />
            <Route component={Aut} path='/servicos/Automacao' />
            <Route component={Ele} path='/servicos/Eletrica' />
            <Route component={Blog} path='/Blog' />

        </BrowserRouter>

    )

}

export default Routes;