import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AlbumSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24%;
    width: 100%;
    background-color: white;
    min-height: 60em;


    @media (max-width: 1400px) {
        margin-top: 29%;
    }

    @media (max-width: 1280px) {
        margin-top: 40%;
    }
    @media (max-width: 800px) {
        margin-top: 70%;
    }
`

const AlbumImage = styled.img`
    max-width: 20rem;

    @media (max-width: 1280px) {
        width: 15em;
    }
`

const AlbumName = styled.h1`
    color: white;
    margin: 0;
    font-size: 2.5rem;
`

const AlbumInfo = styled.div`
    position: absolute;
    left: 5%;
    transform: translateY(-80%);
    display: flex;
    width: 31em;

    @media (max-width: 1100px) {
        position: relative;
        left: auto;
        width: 30em;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    @media (max-width: 400px) {
        transform: translateY(-50%);
    }
`

const InfoContainer = styled.div`
    padding: .5rem 2rem;
`

const AlbumDate = styled.p`
    color: white;
    font-style: italic;
`

const AlbumPlaycount = styled.p`
    color: white;
    font-weight: bold;
`

const TrackList = styled.ul`
    width: 35%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;

    @media (max-width: 1100px) {
        transform: translateY(-17%);
    }
    @media (max-width: 900px) {
        width: 75%;
    }
    @media (max-width: 700px) {
        transform: translateY(-25%);
    }
    @media (max-width: 500px) {
        width: 85%;
    }
`

const NoTracks = styled.h1`
    text-align: center;
    font-size: 2rem;
`

const HomeLink = styled(Link)`
    color: steelblue;
    font-weight: bold;
    top: 1rem;
    left: 1rem;
    position: fixed;
    font-size: 1.5rem;
    background: white;
    padding: .5rem 1rem;
    text-decoration: none;
    z-index: 3;

    &:hover {
        text-decoration: underline;
    }
`

export { 
    AlbumSection, 
    AlbumImage, 
    AlbumName, 
    TrackList, 
    HomeLink, 
    AlbumDate, 
    AlbumInfo, 
    InfoContainer, 
    AlbumPlaycount,
    NoTracks
}