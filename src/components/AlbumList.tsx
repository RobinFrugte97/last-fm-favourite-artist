import React from 'react';
import { IState as Props } from '../interface'

const AlbumList: React.FC<Props> = ({ artist }) => {

    const renderAlbums = (): JSX.Element[] => {
        return artist.albums.map((album, index)=> {
            console.log(album)
            return (
                <section key={index}>
                    <img src={album.image[1]['#text']} alt="" />
                    <h2>{album.name}</h2>
                </section>
            )
        })
    }

    return (
        <div className="AlbumList">
            {renderAlbums()}
        </div>
    );
}

export default AlbumList;
