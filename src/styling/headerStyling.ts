import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ArtistImage = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    width: 66%;
    min-width: 20rem;
    z-index: -2;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    z-index: -2;

    
`

const FadeOverlay = styled.div`
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%);
    position: fixed;
    top: 0;
    right: 0;
    width: 66%;
    height: 100vh;
    min-width: 20rem;
    z-index: -1;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const FavouritesLink = styled(Link)`
    color: steelblue;
    font-weight: bold;
    top: 1rem;
    right: 1rem;
    position: fixed;
    font-size: 1.5rem;
    background: white;
    padding: .5rem 1rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export { ArtistImage, ImageContainer, FadeOverlay, FavouritesLink }