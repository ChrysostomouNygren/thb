import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Discography.scss";

function Discography() {
  const [disc, setDisc] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [ids, setIds] = useState([]);
  const getDicogs = () => {
    axios
      .get("https://api.discogs.com/artists/7427346/releases")
      .then((response) => {
        console.log(response.data.releases);
        setDisc(response.data.releases);
      });
  };

  const getTracks = () => {
    ids.map((id) =>
      axios.get(`https://api.discogs.com/releases/${id}`).then((response) => {
        console.log(response.data);
      })
    );
    //     axios.get(`https://api.discogs.com/releases/${response.data.releases.id}`).then((res) => {
    //     console.log(res.data);
    //   });
  };

  useEffect(() => {
    getDicogs();
    disc.map((id) => setIds((prev) => [...prev, id]));
    // getTracks();
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
          {record.id}
          {/* kalla på funktionen här inne och skicka med idt? */}
        </div>
      ))}
      {ids.map((id) => (<p>{id}</p>))}
    </div>
  );
}

export default Discography;
