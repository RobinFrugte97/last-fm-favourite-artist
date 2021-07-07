import React from 'react'
// import { ArtistImage, ImageContainer, FadeOverlay } from '../styling/headerStyling'

const { REACT_APP_API_KEY } = process.env
const baseUrl = window.location.href
console.log(baseUrl)


const Landing: React.FC<any> = () => {

    return (
        <React.Fragment>
            <h1>Welcome!</h1>
            <a href={`http://www.last.fm/api/auth/?api_key=${REACT_APP_API_KEY}&cb=http://localhost:3000/#/authenticated`}>Last.fm access</a>
        </React.Fragment>
    )
}

export default Landing