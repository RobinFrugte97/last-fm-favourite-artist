import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AlbumSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24%;
    width: 100%;
    background-color: white;

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
    height: 60em;
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

const Track = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: space-between;

    
    &:after {
        position: absolute;
        content: "";
        display: block;
        margin: 0 auto;
        width: 80%;
        padding-top: 72px;
        transform: translateX(13%);
        border-bottom: 1px rgba(0, 0,0,.15) solid;
    }
`

const TrackNumber = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: steelblue;
    margin-right: 2rem
`

const TrackName = styled.h2`

`

const TrackDuration = styled.span`
    font-weight: 100;
    font-size: 1.2rem;
`

const HomeLink = styled(Link)`
    color: steelblue;
    font-weight: bold;
    top: 1rem;
    left: 1rem;
    position: fixed;
`

export { 
    AlbumSection, 
    AlbumImage, 
    AlbumName, 
    TrackList, 
    Track, 
    TrackNumber, 
    TrackName, 
    HomeLink, 
    AlbumDate, 
    AlbumInfo, 
    InfoContainer, 
    AlbumPlaycount,
    TrackDuration
}