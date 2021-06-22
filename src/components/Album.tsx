import React, { useState, useEffect } from 'react'

import { IAlbum } from '../interface'
import { fetchData } from '../helpers/functions'
import { AlbumSection, AlbumImage, AlbumName, TrackList, Track, TrackNumber, TrackName, HomeLink, AlbumInfo, AlbumDate, InfoContainer, AlbumPlaycount } from '../styling/albumStyling'

const { REACT_APP_API_KEY } = process.env

const Album: React.FC<any> = ({ match }) => {

    const {
        params: { album },
    } = match;

    const [albumData, setAlbumData] = useState<IAlbum["album"]>()

    useEffect(() => {
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${REACT_APP_API_KEY}&artist=erra&album=${album}&format=json`)
            .then(data => {
                setAlbumData({
                    artist: data.album.artist,
                    image: data.album.image,
                    listeners: data.album.listeners,
                    mbid: data.album.mbid,
                    name: data.album.name,
                    playcount: data.album.playcount,
                    tags: data.album.tags,
                    tracks: data.album.tracks,
                    url: data.album.url,
                    wiki: data.album.wiki
                })
            })
    }, [album])

    console.log(albumData)
    return (
        <div className="Album">

            <HomeLink to={`/`}>Home</HomeLink>
            {albumData ?
                <React.Fragment>
                    <AlbumSection>
                        <AlbumInfo>
                            <AlbumImage src={albumData.image[4]['#text']} alt="" />
                            <InfoContainer>
                                <AlbumName>{albumData.name}</AlbumName>
                                <AlbumDate>{albumData.wiki.published}</AlbumDate>
                                <AlbumPlaycount>Plays: {albumData.playcount}</AlbumPlaycount>
                            </InfoContainer>

                        </AlbumInfo>
                        <TrackList>
                            {albumData?.tracks?.track?.map((track, index) => {
                                return (
                                    <Track key={index}><TrackNumber>#{track['@attr'].rank}</TrackNumber><TrackName>{track.name}</TrackName></Track>
                                )
                            })}
                        </TrackList>
                    </AlbumSection>
                </React.Fragment>
                :
                <h1>Loading...</h1>
            }
        </div>
    );
}

export default Album;
