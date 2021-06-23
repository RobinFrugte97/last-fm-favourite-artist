import styled from 'styled-components'

const FavouritesSection = styled.section`
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

const FavouritesTitle = styled.h1`
    font-size: 2.5rem;
`


export {
    FavouritesSection,
    FavouritesTitle
}