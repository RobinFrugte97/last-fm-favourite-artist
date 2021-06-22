import React, { useState, useEffect } from 'react';
const { REACT_APP_API_KEY } = process.env;

const Album: React.FC<any> = (album) => {


    const [albumData, setAlbumData] = useState<object>()

    useEffect(() => {
        const fetchData = async () => {

            const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${REACT_APP_API_KEY}&artist=erra&album=${album.name}&format=json`
            const response = await fetch(url)
            const data = await response.json()
            setAlbumData(data)
        }
        fetchData()
    }, [])

    console.log(albumData)

    return (
        <div className="Album">
        </div>
    );
}

export default Album;
