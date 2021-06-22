import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { IAlbum } from '../interface';

const { REACT_APP_API_KEY } = process.env;

const Album: React.FC<any> = ({ match }) => {

    const {
        params: { album },
    } = match;

    const [albumData, setAlbumData] = useState<IAlbum["album"]>()

    useEffect(() => {
        const fetchData = async () => {

            const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${REACT_APP_API_KEY}&artist=erra&album=${album}&format=json`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
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
        }
        fetchData()
    }, [album])

    console.log(albumData)

    return (
        <div className="Album">
            {albumData ?
                <React.Fragment>
                    <h1>{albumData.name}</h1>
                    <Link to={`/`}>Home</Link>
                </React.Fragment>
                
                :
                <h1>Loading...</h1>
            }
        </div>
    );
}

export default Album;
