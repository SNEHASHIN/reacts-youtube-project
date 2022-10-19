import React, { useEffect, useState } from "react";

const API = "AIzaSyDsL2a4LF6H7icdV9LTM7Ug_82NDD5s78Q";
const channelId = "UCmFt1y9cbHx3amPRctMEyvA";

var fetchurl = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10`;
export const Playlist = () => {
  const [allvideos, setAllvideos] = useState([]);
  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
        //   Videolink:
        //     "https://www.youtube.com/embed/f5xgPHtEQWQ" + doc.id.videoId,
        }));
        setAllvideos(result);
      });
  }, []);
  console.log(allvideos);
  return (
    <div>
      {allvideos.map((item) => {
        return (
          <div>
            {/* <iframe
              width="560"
              height="315"
              src={item.Videolink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            <img src={item.snippet.thumbnails.high.url} width="300"px />
            <p>{item.snippet.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Playlist;
