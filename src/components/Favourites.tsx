import React from "react"
import { useSelector } from 'react-redux'

import TrackItem from "./Track"

import { State } from '../state'
import { HomeLink, TrackList } from "../styling/albumStyling"
import { FavouritesSection, FavouritesTitle } from "../styling/favouritesStyling"
import { removeInitialstate } from "../helpers/functions"
import { Track } from "../interface"

const Favourites: React.FC<any> = () => {

    const favourites: Array<Track> = useSelector((state: State) => state.favourites)
    let cleanFavourites
    if (favourites.length > 0) {
        cleanFavourites = removeInitialstate(favourites)
    }
    
    return (
        <React.Fragment>
            <HomeLink to='/'>Home</HomeLink>
            <FavouritesSection>
                <FavouritesTitle>Favourites</FavouritesTitle>
                {favourites.length > 0 ?
                <TrackList>
                        {cleanFavourites?.map((track, index) => {
                        return (
                            <React.Fragment key={index}>
                                <TrackItem  track={track} parent={'favourites'}/>
                            </React.Fragment>
                        )
                    })}
                </TrackList>
                : 
                <h2>Add tracks to your favourites..</h2>}
            </FavouritesSection>
        </React.Fragment>
    )
}

export default Favourites