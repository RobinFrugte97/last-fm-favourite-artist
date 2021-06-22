export interface IState {
    artist: {
        name: string
        albums: Array<IPropAlbum>
    }
}

interface IPropAlbum {
    artist: object,
    image: Array<IPropAlbumImage>,
    name: string,
    playcount: number,
    url: string
}

interface IPropAlbumImage {
    size: string,
    '#text': string
}