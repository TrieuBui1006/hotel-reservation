import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Styles
import './App.css'

//Pages
import { Home, Rooms, SingleRoom, Error } from './pages'

//Components
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
