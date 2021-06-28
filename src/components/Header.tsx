import React from 'react'
import { ArtistImage, ImageContainer, FadeOverlay } from '../styling/headerStyling'


const Header: React.FC<any> = () => {
    return (
        <React.Fragment>
            <ImageContainer>
                <FadeOverlay />
                <ArtistImage src="https://lastfm.freetls.fastly.net/i/u/770x0/8c3331277c4ca3af3b07555c59af920b.webp#8c3331277c4ca3af3b07555c59af920b" alt="" />
            </ImageContainer>
        </React.Fragment>
    )
}

export default Header
