import React from "react";
import "./Links.scss";

function Links() {
  return (
    <div className="links-comp" id="links">
      <h2>Links</h2>
      <div className="links-border">
        <div className="links-card">
          <a
            href="https://open.spotify.com/artist/1slNQIXSNeYaxLKmpJvtaJ
            "
          >
            Spotify
          </a>
          <a
            href="https://music.apple.com/us/artist/the-horizon-bleeds/1438543866
            "
          >
            Apple music
          </a>

          <a href="https://thehorizonbleeds.bandcamp.com/">Bandcamp</a>
          <a href="https://www.discogs.com/artist/7427346-The-Horizon-Bleeds">
            Discogs
          </a>
          {/* <a href="https://www.instagram.com/the.horizon.bleeds/">
              Instagram
            </a> */}
        </div>
      </div>
    </div>
  );
}

export default Links;
