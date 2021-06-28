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