import React, { useState, useEffect } from 'react'

import { IState as Props } from '../interface'
import { fetchData } from '../helpers/functions'
import { List, ArtistName, AlbumCard, AlbumListImage, AlbumLink, AlbumName } from '../styling/albumListStyling'

const { REACT_APP_API_KEY } = process.env

const AlbumList: React.FC<Props> = () => {

    const [artistData, setArtistData] = useState<Props["artist"]>()

    useEffect(() => {
        const gatherData = () => {
            fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=erra&api_key=${REACT_APP_API_KEY}&format=json&limit=12`)
            .then(data => {
                setArtistData({
                    name: data.topalbums["@attr"].artist,
                    albums: data.topalbums.album
                })
            })
        }
        gatherData()
    }, [])

    return (
        <div className="AlbumList">
            {artistData ?
                <React.Fragment>
                    <ArtistName>{artistData?.name}</ArtistName>
                    <List>
                        {artistData?.albums?.map((album, index) => {
                            return (
                                <AlbumCard key={index}>
                                    <AlbumListImage src={album.image[3]['#text']} alt="" />
                                    <AlbumLink to={`/${album.name}`}>
                                        <AlbumName>{album.name}</AlbumName>
                                    </AlbumLink>
                                </AlbumCard>
                            )
                        })}
                    </List>
                </React.Fragment>
            :
            <h1>Loading...</h1>
        }
        </div>
        
    )
}

export default AlbumList
