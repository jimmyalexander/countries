import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AfricaScreen } from '../components/AfricaScreen'
import { AmericaScreen } from '../components/AmericaScreen'
import { AsiaScreen } from '../components/AsiaScreen'
import { EuropeScreen } from '../components/EuropeScreen'
import { FlagScreen } from '../components/FlagScreen'
import { Home } from '../components/Home'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { OceaniaScreeen } from '../components/OceaniaScreeen'
import { Principal } from '../components/Principal'

export const DashboardRoutes = () => {
  return (
   
     <div>
      <div>
        <Switch>
          <Layout >
          <Route exact path='/countries' component={Principal} />
          <Route exact path='/countries/world' component={ Home } />
          <Route exact path='/countries/africa' component={ AfricaScreen } />
          <Route exact path='/countries/america' component={ AmericaScreen } />
          <Route exact path='/countries/asia'  component={ AsiaScreen } />
          <Route exact path='/countries/europe'  component={ EuropeScreen } />
          <Route exact path='/countries/oceania'  component={ OceaniaScreeen } />
          <Route exact path='/countries/flag/:flagName' component={ FlagScreen }/>
          </Layout>
        </Switch>
      </div>
    </div>
   

   
  )
}
