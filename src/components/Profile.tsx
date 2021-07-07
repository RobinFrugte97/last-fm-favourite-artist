import React, { useEffect, useState } from 'react'
import ReactInterval from 'react-interval'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useInView } from 'react-intersection-observer';
import { fetchData } from '../helpers/functions'
import { NowPlaying, UserData, UserSession } from '../interface'
import { actionCreators, State } from '../state'
import { ProfileSection, ProfileInfo, ProfileSpan, ProfileHeader, NowPlayingDiv, NowPlayingArtist, NowPlayingTrack, ProfileImage, NowPlayingBar, ObserverSpace, NowPlayingBarImage, NowPlayingBarWrapper } from '../styling/authenticatedStyling'

const { REACT_APP_API_KEY } = process.env

let fetchNowPlaying: { (): void; (): void }

const Profile: React.FC<any> = () => {
    const dispatch = useDispatch()

    const { setHeaderImg } = bindActionCreators(actionCreators, dispatch)

    const session: UserSession = useSelector((state: State) => state.user)

    const [userData, setUserData] = useState<UserData>()
    const [nowPlaying, setNowPlaying] = useState<NowPlaying>()

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        const loadUser = () => {
            fetchData(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${session.user}&api_key=${REACT_APP_API_KEY}&format=json`)
            .then(data => {
                if (data.user) {
                    setUserData({
                        age: data.user.age,
                        bootstrap: data.user.bootstrap,
                        country: data.user.country,
                        gender: data.user.gender,
                        image: data.user.image,
                        __proto__: data.user.__proto__,
                        name: data.user.name,
                        playcount: data.user.playcount,
                        playlists: data.user.playlists,
                        realname: data.user.realname,
                        registered: data.user.registered,
                        subscriber: data.user.subscriber,
                        type: data.user.type,
                        url: data.user.url
                    })
                } else {
                    console.log('No user data')
                    window.location.href = `http://www.last.fm/api/auth/?api_key=${REACT_APP_API_KEY}&cb=http://localhost:3000/#/authenticated`
                }
            })
            fetchNowPlaying = () => {
                fetchData(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${session.user}&api_key=${REACT_APP_API_KEY}&format=json&limit=1&extended=1`)
                    .then(data => {
                        console.log(data.recenttracks.track[0])
                        setHeaderImg(data.recenttracks.track[0].image[3]["#text"])
                        setNowPlaying({
                            '@attr': data.recenttracks.track[0]['@attr'],
                            album: data.recenttracks.track[0].album,
                            artist: data.recenttracks.track[0].artist,
                            image: data.recenttracks.track[0].image,
                            loved: data.recenttracks.track[0].loved,
                            mbid: data.recenttracks.track[0].mbid,
                            name: data.recenttracks.track[0].name,
                            streamable: data.recenttracks.track[0].streamable,
                            url: data.recenttracks.track[0].url
                        })
                    })
                }
                fetchNowPlaying()            
            }
            loadUser()
        }, [])

        console.log(inView)
    return (
        <React.Fragment>
            <ObserverSpace ref={ref}></ObserverSpace>
            { inView ?
            <NowPlayingDiv>
                <ReactInterval timeout={15000} enabled={true} callback={() => fetchNowPlaying()} />
                    {/* @ts-ignore */}
                    {/* <h1>{ nowPlaying['@attr'] ? 'Now playing:' : "Recently played:"}</h1> */}
                <NowPlayingTrack>{nowPlaying?.name}</NowPlayingTrack>
                <NowPlayingArtist>{nowPlaying?.artist.name}</NowPlayingArtist>
                <img src={nowPlaying?.image[2]['#text']} alt="album" />
            </NowPlayingDiv>
            :
            <NowPlayingBar>
                <ReactInterval timeout={15000} enabled={true} callback={() => fetchNowPlaying()} />
                    <NowPlayingBarWrapper>
                        <NowPlayingTrack>{nowPlaying?.name}</NowPlayingTrack>
                        <NowPlayingArtist>{nowPlaying?.artist.name}</NowPlayingArtist>
                    </NowPlayingBarWrapper>
                    <NowPlayingBarImage src={nowPlaying?.image[2]['#text']} alt="album" />
            </NowPlayingBar>
            }
            <ProfileSection>
                <ProfileInfo>
                    <ProfileImage src={userData?.image[3]['#text']} alt="userimage" />
                    <ProfileHeader>Welcome, <ProfileSpan>{session.user}</ProfileSpan>!</ProfileHeader>
                </ProfileInfo>
                <Link to={`/artist`}></Link>
            </ProfileSection>
        </React.Fragment>
    )
}

export default Profile