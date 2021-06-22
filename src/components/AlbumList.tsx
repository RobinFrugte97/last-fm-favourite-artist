import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { IState as Props } from '../interface'

const { REACT_APP_API_KEY } = process.env

const AlbumList: React.FC<Props> = () => {

    const [data, setData] = useState<Props["artist"]>()

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=erra&api_key=${REACT_APP_API_KEY}&format=json&limit=12`
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
        <div className="AlbumList">
            {data ?
                <React.Fragment>
                    <h1>{data.name}</h1>
                    {data.albums.map((album, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/${album.name}`}>
                                    <section>
                                        <img src={album.image[1]['#text']} alt="" />
                                        <h2 >{album.name}</h2>
                                    </section>
                                </Link>
                            </div>
                        )
                    })}
                </React.Fragment>
            :
            <h1>Loading...</h1>
        }
        </div>
        
    )
}

export default AlbumList
