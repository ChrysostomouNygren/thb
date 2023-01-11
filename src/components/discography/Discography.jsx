import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Discography.scss";

function Discography() {
  const [disc, setDisc] = useState([]);
  const getDicogs = () => {
    axios
      .get("https://api.discogs.com/artists/7427346/releases")
      .then((response) => {
        console.log(response.data.releases);
        setDisc(response.data.releases);
      });
  };

  useEffect(() => {
    getDicogs();
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
        </div>
      ))}
    </div>
  );
}

export default Discography;
