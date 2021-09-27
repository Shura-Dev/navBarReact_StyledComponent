import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
