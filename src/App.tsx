import React, { useState, useEffect } from 'react';
import { IState as State } from './interface'

import AlbumList from './components/AlbumList'

const { REACT_APP_API_KEY } = process.env;



const App = () => {

  const [data, setData] = useState<State["artist"]>()

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=erra&api_key=${REACT_APP_API_KEY}&format=json`
      const response = await fetch(url)
      const artist = await response.json()
      setData({
        name: artist.topalbums["@attr"].artist,
        albums: artist.topalbums.album
      })
    }
    fetchData()
  }, [])

  return (
    <div className="Album">
      {data ?
        <React.Fragment>
          <h1>{data.name}</h1>
          <AlbumList artist={data} />
        </React.Fragment>
        :
        <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
