import React from 'react'
import { Route, HashRouter as Router } from "react-router-dom"
import { GlobalStyle } from './styling/globalStyling'

import Landing from './components/Landing'
import AlbumList from './components/AlbumList'
import Album from './components/Album'
import Header from './components/Header'
import Favourites from './components/Favourites'
import Authenticated from './components/Authenticated'
import Profile from './components/Profile'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/authenticated" component={Authenticated} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/artist" component={AlbumList} />
          <Route exact path="/favourites" component={Favourites} />
          <Route path="/album/:album" component={Album} />
        </Router>
      </React.Fragment>
    </React.Fragment>
  )
}

export default App
