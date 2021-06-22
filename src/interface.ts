export interface IState {
    artist: {
        name: string
        albums: Array<IPropAlbum>
    }
}

interface IPropAlbum {
    artist: object
    image: Array<IPropAlbumImage>
    name: string
    playcount: number
    url: string
}

interface IPropAlbumImage {
    size: string
    '#text': string
}

export interface IAlbum {
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
        wiki: object
    }
}

interface ITracks {
    '@attr': {
        rank: string
    },
    artist: object
    duration: string
    name: string
    streamable: object
    url: string
}