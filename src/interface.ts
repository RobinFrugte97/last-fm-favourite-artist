export type IState = {
    artist: {
        name: string
        albums: Array<IPropAlbum>
    }
}

type IPropAlbum = {
    artist: object
    image: Array<IPropAlbumImage>
    name: string
    playcount: number
    url: string
}

type IPropAlbumImage = {
    size: string
    '#text': string
}

export type IAlbum = {
    album: {
        artist: string
        image: Array<IPropAlbumImage>
        listeners: string
        mbid: string
        name: string
        playcount: string
        tags: Array<object>
        tracks: {
            track: Array<ITracks>
        }
        url: string
        wiki: {
            content: string
            published: string
            summary: string
        }
    }
}

export type ITracks = {
    name: string
    duration: string
    artist: object
    album: string
    '@attr': {
        rank: string
    }
    playcount: string
    url: string
}

export type Track = {
    name: string
    duration: string
    artist: object
    album: string
    '@attr': {
        rank: string
    }
    playcount: string
    url: string
}

export type Action = {
    type: string
    payload: Track
}

export type HeaderAction = {
    type: string
    payload: string
}

export type UserSession = {
    key: string
    user: string
    subscriber: number
}

export type UserAction = {
    type: string
    payload: UserSession
}

export type UserData = {
    age: string
    bootstrap: string
    country: string
    gender: string
    image: Array<IPropAlbumImage>
    __proto__: Array<any>
    name: string
    playcount: string
    playlists: string
    realname: string
    registered: { 
        unixtime: string
        ["#text"]: number 
    }
    subscriber: string
    type: string
    url: string
}

export type NowPlaying = {
    '@attr'?: { nowplaying: string }
    album: {
        mbid: string, '#text': string }
    artist: { url: string, mbid: string, image: [{ size: string, '#text': string }], name: string }
    image: Array<{ size: string, '#text': string}>
    loved: string
    mbid: string
    name: string
    streamable: string
    url: string
}