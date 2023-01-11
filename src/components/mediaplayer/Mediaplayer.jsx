import React from "react";
import './Mediaplayer.scss'

function Mediaplayer() {
  return (
    <div className="mediaplayer-wrapper">
      <iframe
      className="bc-mediaplayer"
        src="https://bandcamp.com/EmbeddedPlayer/album=4235570077/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
        seamless
      >
        <a href="https://thehorizonbleeds.bandcamp.com/album/decay">
          Decay by the horizon bleeds
        </a>
      </iframe>
    </div>
  );
}

export default Mediaplayer;
