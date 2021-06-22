import styled from 'styled-components'
import { Link } from 'react-router-dom'


const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: auto;
    padding: 3rem 10%;
    background-color: white;

    @media (max-width: 1280px) {
        padding: 3rem 0;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 670px) {
        width: 100%;
        grid-template-columns: 1fr;
    }
`

const ArtistName = styled.h1`
    width: fit-content;
    font-size: 5rem;
    margin-top: 20%;
    margin-left: 3rem;
    color: white;
`

const AlbumCard = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const AlbumListImage = styled.img`

`

const AlbumLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const AlbumName = styled.h2`
    max-width: 16em;
    color: black;
    text-align: center;
`



export { List, ArtistName, AlbumCard, AlbumListImage, AlbumLink, AlbumName }