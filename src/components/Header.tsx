import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../state'
import { ArtistImage, ImageContainer, FadeOverlay } from '../styling/headerStyling'


const Header: React.FC<any> = () => {

    const headerImg: string = useSelector((state: State) => state.header)

    return (
        <React.Fragment>
            <ImageContainer>
                <FadeOverlay />
                <ArtistImage src={headerImg} alt="" />
            </ImageContainer>
        </React.Fragment>
    )
}

export default Header
