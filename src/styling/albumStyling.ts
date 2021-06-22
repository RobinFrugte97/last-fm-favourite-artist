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
    @media (max-width: 670px) {
        margin-top: 40%;
    }
    
`

const AlbumImage = styled.img`
    max-width: 20rem;
    transform: translateY(-33%)
`

const AlbumName = styled.h1`
    font-size: 2.5rem;
`

const TrackList = styled.ul`
    width: 35%;
    height: 54em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Track = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 4rem;
`

const TrackNumber = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: steelblue;
    margin-right: 2rem
`

const TrackName = styled.h2`

`

const HomeLink = styled(Link)`
    color: steelblue;
    font-weight: bold;
    top: 1rem;
    left: 1rem;
    position: fixed;
`

export { AlbumSection, AlbumImage, AlbumName, TrackList, Track, TrackNumber, TrackName, HomeLink }