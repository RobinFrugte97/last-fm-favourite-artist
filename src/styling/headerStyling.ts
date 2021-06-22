import styled from 'styled-components'

const ArtistImage = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    width: 66%;
    min-width: 20rem;
    z-index: -2;
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
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,212,255,0) 100%);
    position: fixed;
    top: 0;
    right: 0;
    width: 66%;
    height: 100vh;
    min-width: 20rem;
    z-index: -1;
`

export { ArtistImage, ImageContainer, FadeOverlay }