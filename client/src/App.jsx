import React from 'react'
import Navebar from './components/Navebar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Router } from 'react-router-dom'

const App = () => {
  return (
<>
<BrowserRouter>
<Navebar/>
<Router>
  <Route>
    
  </Route>

</Router>

    
<Footer/>
</BrowserRouter>

</>
  )
}

export default App