import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AfricaScreen } from '../components/AfricaScreen'
import { AmericaScreen } from '../components/AmericaScreen'
import { AsiaScreen } from '../components/AsiaScreen'
import { EuropeScreen } from '../components/EuropeScreen'
import { FlagScreen } from '../components/FlagScreen'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { OceaniaScreeen } from '../components/OceaniaScreeen'
import { Principal } from '../components/Principal'

export const DashboardRoutes = () => {
  return (
   
     <div className='dash'>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/world' component={ Home } />
          <Route exact path='/africa' component={ AfricaScreen } />
          <Route exact path='/america' component={ AmericaScreen } />
          <Route exact path='/asia'  component={ AsiaScreen } />
          <Route exact path='/europe'  component={ EuropeScreen } />
          <Route exact path='/oceania'  component={ OceaniaScreeen } />
          <Route exact path='/flag/:flagName' component={ FlagScreen }/>
        </Switch>
      </div>
      <Principal />
    </div>
   

   
  )
}
