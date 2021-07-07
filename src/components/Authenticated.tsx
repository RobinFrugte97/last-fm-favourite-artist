import React, { useEffect, useState } from 'react'
import md5 from 'md5'
import { bindActionCreators } from 'redux'
import { actionCreators} from '../state'
import { useHistory } from "react-router-dom"


import { fetchData } from '../helpers/functions'
import { useDispatch } from 'react-redux'
import { UserSession } from '../interface'
import { WelcomeMessage } from '../styling/authenticatedStyling'


const token = window.location.search.split('token=')[1]
console.log(token);

const secret = "23cf1ba768d51df26251db51118550eb"

const { REACT_APP_API_KEY } = process.env

const signature = md5(`api_key${REACT_APP_API_KEY}methodauth.getSessiontoken${token}${secret}`)


const Authenticated: React.FC<any> = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const { userAuthenticated } = bindActionCreators(actionCreators, dispatch)

    const [userSession, setUserSession] = useState<UserSession>()
       
    useEffect(() => {
        const loadUser = () => {
            fetchData(`https://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=${token}&api_key=${REACT_APP_API_KEY}&api_sig=${signature}&format=json`)
            .then(data => {
                console.log(data)
                if (data.session) {
                    setUserSession({
                        user: data.session.name,
                        key: data.session.key,
                        subscriber: data.session.subscriber
                    })
                }
                console.log(userSession)
            })
            .then(() => {
                if (userSession) {
                    userAuthenticated(userSession)
                    window.location.href = `http://localhost:3000/?token=${token}#/profile`
                } else {
                    console.log('No user data')
                    // window.location.href = `http://www.last.fm/api/auth/?api_key=${REACT_APP_API_KEY}&cb=http://localhost:3000/#/authenticated`
                }
            })
        }
        loadUser()
    }, [userSession, history, userAuthenticated])
    
    return (
        <React.Fragment>
            <WelcomeMessage>Authenticating...</WelcomeMessage>
        </React.Fragment>
    )
}

export default Authenticated
