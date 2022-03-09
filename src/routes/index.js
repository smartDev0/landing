import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Main from '../stories/Main'
import Dashboard from '../pages/DashboardPage'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'


export default (
    <BrowserRouter>
        <TopNav />
        <TopBar />
        <Main>
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </Main>
        <Footer />
    </BrowserRouter>
)
