import { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios';
import Tile from './components/Tile';

type Song = {
  name: string,
  artist: string,
  uri: string
}


function App() {
  const [songInfo, setSongInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numSongsToLoad, setNumSongsToLoad] = useState(10);

  
  useEffect(()=>{
    loadSongs((res: AxiosResponse)=>{
      setSongInfo(res.data);
      console.log("Initial songs loaded.");
    })
  // this should only trigger once on page load.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadSongs = useCallback((onSuccess: CallableFunction) => {
    console.log("Loading songs...");
    setLoading(true);
    axios.get(`api/random?n=${numSongsToLoad}`).then(
      (res)=>{onSuccess(res); setLoading(false);},
      (error) => {
        console.error(error.status, "Song endpoint failed", error.message);
        setLoading(false);
      }
    );
  }, [numSongsToLoad])

  const onSongLoadClick = () => {
    loadSongs((res: AxiosResponse)=>{
      console.log(`Loaded ${numSongsToLoad} more songs.`);
      setSongInfo(songInfo.concat(res.data));
    });
  }

  const onNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO cleanup input here so user can't input wierd stuff like 1000 or -1, or ""
    setNumSongsToLoad(parseInt(e.target.value));
  }

  let loadSongText = "Loading...";
  if (!loading){
    loadSongText = `Load ${numSongsToLoad} More Song${(numSongsToLoad > 1) ? "s" : ""}...`;
  }

  return (
    <>
      <h1>Random Spotify Songs</h1>
      <div style={{display:"flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"}}>
        {songInfo.map((song: Song, i)=>{
          return (<Tile
            key={i}
            songName={song.name}
            artistName={song.artist}
            spotifyUri={song.uri}
          />)
        })}
      </div>
      <div style={{padding: "1em"}}>
        <button disabled={loading} onClick={onSongLoadClick}>
          {loadSongText}
        </button>
        <input 
          style={{ margin: "0.5em", padding: "0.5em", borderRadius:"7px"}}
          type={'number'}
          min={1}
          step={1}
          max={500}
          value={numSongsToLoad}
          onChange={onNumChange}
          onKeyUp={(e) => {if (e.key==="Enter"){onSongLoadClick()}}}
        />
      </div>
    </>
  )
}

export default App
