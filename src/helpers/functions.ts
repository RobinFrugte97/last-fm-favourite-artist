const fetchData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const secondsToMinutes = (stringTime: string) => { 
    const time = Number(stringTime)
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) 
}

export {
    fetchData,
    secondsToMinutes
}