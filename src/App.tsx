import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from './styling/globalStyling'

import AlbumList from './components/AlbumList'
import Album from './components/Album'
import Header from './components/Header'
import Favourites from './components/Favourites'

const App = () => {
  return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <React.Fragment>
          <Router>
            <Route exact path="/" component={AlbumList} />
            <Route exact path="/favourites" component={Favourites} />
            <Route path="/album/:album" component={Album} />
          </Router>
        </React.Fragment>
      </div>
  )
}

export default App
