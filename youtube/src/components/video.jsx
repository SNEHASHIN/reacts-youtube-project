import React,{useEffect,useState} from 'react';
//import React from "react";
 import "./video.css"

const API = "AIzaSyBIbVkfoR0jTOtQVN8PjOgb4UW3oDr12Lg";
const channelId = "UCmFt1y9cbHx3amPRctMEyvA";

var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`;
export const Video = () => {
  const[allvideos,setAllvideos] = useState([])
  useEffect(()=>{
   fetch(fetchurl).then((response)=>response.json())
  .then((resJson)=>{
  const result = resJson.items.map((doc) => ({
  ...doc,
  Videolink:
   "https://www.youtube.com/embed/"+doc.id.videoId,
  }));
   setAllvideos(result)
  })
  },[])
  console.log(allvideos)
  return (
    <div className='main1'>
      {allvideos.map((item)=>{
                return (
                  <div className='main2'>
                    <iframe
                      width="300"
                      height="200"
                      src={item.Videolink}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p>{item.snippet.title}</p>
                  </div>
                );
            })}
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gyvAdrArqgs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};
export default Video;
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDsL2a4LF6H7icdV9LTM7Ug_82NDD5s78Q&type=video&q=ajax
