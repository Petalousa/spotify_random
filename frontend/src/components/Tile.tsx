type Props = {
    songName: string,
    artistName: string,
    spotifyUri: string,
}

export default function Tile({ songName, artistName, spotifyUri }: Props) {
    const tileUrl = "https://open.spotify.com/track/" + spotifyUri;
    const spotifyAppUrl = "spotify:track:" + spotifyUri;
    return (
    <a href={tileUrl} target="_blank">
        <a href={spotifyAppUrl}><div className="bubble" title="Open in Spotify">♫</div></a>
        <div className="card" style={{width: "calc(25% - 15px);"}}>
            <div>{songName}</div>
            <div><i>{artistName}</i></div>
        </div>
    </a>
    )
}