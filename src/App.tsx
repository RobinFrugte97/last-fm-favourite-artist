import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";

import AlbumList from './components/AlbumList'
import Album from './components/Album';

const App = () => {
  return (
      <div className="App">
        <React.Fragment>
          <Router>
            <Route exact path="/" component={AlbumList} />
            <Route path="/:album" component={Album} />
          </Router>
        </React.Fragment>
      </div>
  )
}

export default App
