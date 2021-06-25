import { Track } from "../interface"

const fetchData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const secondsToMinutes = (stringTime: string) => { 
    const time = Number(stringTime)
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) 
}

const removeTrack = (state: Array<Track>, payload: Track) => {
    const newArr = [...state]
    newArr.forEach((track, index: number) => {
        if (track.name.toLowerCase() === payload.name.toLowerCase()) {
            newArr.splice(index, index+1)
        }
    })
    return newArr
}

const removeInitialstate = (favourites: Array<Track>) => {
    if (favourites[0].name === "") {
        favourites.shift()
        return favourites
    } else {
        return favourites
    }
}

export {
    fetchData,
    secondsToMinutes,
    removeTrack,
    removeInitialstate
}