import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Discography.scss";

function Discography() {
  const [disc, setDisc] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [track, setTrack] = useState([]);
  const [ids, setIds] = useState([]);
  const getDicogs = () => {
    axios
      .get("https://api.discogs.com/artists/7427346/releases")
      .then((response) => {
        const result = response.data.releases;
        // console.log(result);
        setDisc(result);
        const getId = result.map(({ id }) => id);
        // console.log(getId);
        setIds(getId);
      });
  };

  // inte helt övergivit detta skepp... hade varit soft att kunna rendera ut låtarna konstant med varje skiva och inte var för sig.
  const getTracks = () => {
    ids.map((id) =>
      axios.get(`https://api.discogs.com/releases/${id}`).then((response) => {
        const result = response.data;
        // console.log(result.id, result.tracklist);
        setTracks((...prev) => [...prev, result]);
      })
    );
  };

  const getTrack = (id) => {
    axios.get(`https://api.discogs.com/releases/${id}`).then((response) => {
      console.log(response.data);
      setTrack(response.data);
    });
  };


  useEffect(() => {
    getDicogs();
    getTracks();
  }, []);

  return (
    <div className="disc-comp">
      <h2>Discography</h2>
      {disc.map((record) => (
        <div key={record.id} className="disc-card">
          <h3>{record.title}</h3>
          <p>{record.year}</p>
          <p>Label: {record.label}</p>
          <p>Format: {record.format}</p>
          <p>{record.id}</p>
          {/* låttitelrendering */}
          <button onClick={() => getTrack(record.id)}>Track list</button>
          {track.id === record.id ? (
            track.tracklist.map((song) => <p>{song.title}</p>)
          ) : (
            <></>
          )}
        </div>
      ))}
      {tracks.map((trackiluring) => {
        <p>id: {trackiluring.id}</p>;
      })}
    </div>
  );
}

export default Discography;
