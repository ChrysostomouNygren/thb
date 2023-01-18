import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Discography.scss";

function Discography() {
  const [realeses, setRealeses] = useState([]);
  const [track, setTrack] = useState([]);

  const getReleases = () => {
    axios
      .get("https://api.discogs.com/artists/7427346/releases")
      .then((response) => {
        const result = response.data.releases;
        setRealeses(result);
      });
  };

  const getTrack = (id) => {
    axios.get(`https://api.discogs.com/releases/${id}`).then((response) => {
      setTrack(response.data);
    });
  };

  useEffect(() => {
    getReleases();
  }, []);

  return (
    <div className="disc-comp" id="discography">
      <h2>Discography</h2>
      <div className="disc-border">
        {realeses.map((record) => (
          <div key={record.id} className="disc-card">
            <div className="album-title">
              <h3>{record.title}</h3>
              <p>{record.year}</p>
            </div>
            <div className="rendered-card">
              <div className="rendered-disc">
                <p>Label: {record.label}</p>
                <p>Format: {record.format}</p>
              </div>
              {/* låttitelrendering */}
              <div
                className={
                  track.id === record.id ? "scroll-tracks" : "rendered-tracks"
                }
              >
                {/* ge knapp klassnamn för att göra osynlig vid aktivering */}
                <button onClick={() => getTrack(record.id)}>
                  {track.id === record.id ? "" : "Track list"}
                </button>
                {track.id === record.id ? (
                  track.tracklist.map((song) => (
                    <div key={song.title} className="rendered-track">
                      <p>{song.title}</p>
                      <p>{song.duration}</p>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discography;
