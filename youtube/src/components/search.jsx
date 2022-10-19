import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setdata] = useState([""]);
  const [search, setsearch] = useState("");

  const GetApi = async () => {
    const Apidata = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=searchtext&key=AIzaSyBh3SFyYtDquoov475WRr06g5EC1wUfwd0&type=video&maxResults=20"
    );
    setdata(Apidata.data);
    console.log(Apidata.data);
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <div className="container">
        {data.map((item) => {
          return (
            <div className="data" key={item.id}> 
              {/* <p className="snippet"> Snippet- {item.snippet}</p> */}
            </div>
    
          );
        })}
      </div>
    </>
  );
}

export default Home;
