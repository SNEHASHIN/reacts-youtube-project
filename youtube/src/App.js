// import logo from './logo.svg';
//import './App.css';
 import  Header  from "./components/Header"
 import Sidebar from "./components/Sidebar";
 import React from "react";
import Video from "./components/video";
import Playlist from "./components/Playlist"
  // import Videos from "./components/videos"
// import Search from "./components/search"
function App() {
  return (
    <div className="App">
      <Header /> 
        <Sidebar />
      <Video />
      <Playlist />
      {/* <Videos /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;

// "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDsL2a4LF6H7icdV9LTM7Ug_82NDD5s78Q&type=video&q=ajax"
