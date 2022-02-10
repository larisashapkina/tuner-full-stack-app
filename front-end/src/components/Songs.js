import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(API + "/songs")
    .then((res)=>{
      setSongs(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Take me there</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;