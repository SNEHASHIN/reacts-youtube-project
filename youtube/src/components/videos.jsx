import React, { useState, useEffect } from "react";
import axios from "axios";

export function DataFetch() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        //   "https://www.googleapis.com/youtube/v3/search?q=searchtext&key=AIzaSyBh3SFyYtDquoov475WRr06g5EC1wUfwd0&type=video&maxResults=20"
        "https://www.googleapis.com/youtube/v3/search?q=searchtext&key=AIzaSyANXi1iBEiBW01gLvXzCgGyhs-ovrQuUAo&type=video&maxResults=20"
      )

      // )
      .then((response) => {
        console.log(response.data);
        setData([...response.data]);
      });
  }, []);
  return (
    <div>
        data
      {/* {kind.map((items) => (
        <div key={items.id}>
          <h1>Name :{items.etag}</h1> */}
          {/* <p>Body :{post.body}</p>
          <p>Email:{post.email}</p>
          <p>postid:{post.postId}</p>
          <p>id:{post.id}</p> */}
        {/* </div>
       )) 
       }  */}
    </div>
  );
}
export default DataFetch