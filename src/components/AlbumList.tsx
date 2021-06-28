import React, { useState, useEffect } from 'react'

import { IState as Props } from '../interface'
import { fetchData } from '../helpers/functions'
import { List, ArtistName, AlbumCard, AlbumListImage, AlbumLink, AlbumName } from '../styling/albumListStyling'
import { NoTracks } from '../styling/albumStyling'
import { FavouritesLink } from '../styling/headerStyling'

const { REACT_APP_API_KEY } = process.env

const AlbumList: React.FC<Props> = () => {

    const [artistData, setArtistData] = useState<Props["artist"]>()

    useEffect(() => {
        const gatherData = () => {
            fetchData(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=erra&api_key=${REACT_APP_API_KEY}&format=json&limit=12`)
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
                    <FavouritesLink to={`/favourites`}>Favourites</FavouritesLink>

                    <ArtistName>{artistData?.name}</ArtistName>
                    <List>
                        {artistData?.albums?.map((album, index) => {
                            return (
                                <AlbumLink key={index} to={`/album/${album.name}`}>
                                    <AlbumCard>
                                        <AlbumListImage src={album.image[3]['#text']} alt="" />
                                        <AlbumName>{album.name}</AlbumName>
                                    </AlbumCard>
                                </AlbumLink>
                            )
                        })}
                    </List>
                </React.Fragment>
            :
            <NoTracks>Loading...</NoTracks>
        }
        </div>
        
    )
}

export default AlbumList
