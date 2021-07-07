import styled from 'styled-components'

const WelcomeMessage = styled.h1`
    color: white;
`

const ProfileSpan = styled.span`
    color: #383bb3;
`

const ProfileHeader = styled.h1`
    text-align: center;
    color: black;
`

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24%;
    width: 100%;
    background-color: white;
    min-height: 60rem;


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

const ProfileInfo = styled.section`
    transform: translateY(-40%);
    display: flex;
    flex-direction: column;


`

const ProfileImage = styled.img`
    border-radius: 50%;
`

const NowPlayingDiv = styled.div`
    position: relative;
    color: white;
    position: absolute;
    top: 2.5rem;
    left: 5rem;
    text-align: left;
`

const NowPlayingArtist = styled.h2`
    font-weight: 100;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
`

const NowPlayingTrack = styled.h2`
    margin-bottom: .5rem;
`

const NowPlayingBar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000000;
    justify-content: flex-end;
    z-index: 5;
    color: white;
`

const NowPlayingBarImage = styled.img`
    width: 6rem;
    margin: .5rem 1rem;
`

const NowPlayingBarWrapper = styled.div`

`

const ObserverSpace = styled.div`
    top: 0;
    left: 0;
    height: 24rem;
    position: absolute;
`

export { NowPlayingBarWrapper, WelcomeMessage, ProfileSection, ProfileInfo, ProfileSpan, ProfileHeader, NowPlayingDiv, NowPlayingArtist, NowPlayingTrack, ProfileImage, NowPlayingBar, ObserverSpace, NowPlayingBarImage }