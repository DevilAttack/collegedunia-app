import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/front/Header/Header";
import College from "./component/front/College/College";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInitialData = async () => {
      await getInputFetchData();
    };

    getInitialData();
  }, [pageNo]);

  function getInputFetchData() {
    console.log("in get data ");
    axios
      .get(`http://localhost:3000/colleges?_page=${pageNo}&_limit=10`)
      .then((response) => {
        if (pageNo > 1) {
          let arr = [...data, ...response.data];
          setData(arr);
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        alert("Axios Get request failed");
      });
  }

  const firstEvent = (window.onscroll = function (e) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      let pg = pageNo + 1;
      console.log("event");
      setLoading(true);
      setPageNo(pg);
      getInputFetchData();
      setLoading(false);
    }
  });

  return (
    <div className="EventOpenor">
      <Header />
      <div className="Container" onScroll={firstEvent}>
        {data.map((item) => (
          <College key={item.college_name} ColInputdata={item} />
        ))}
      </div>
      {loading && <h1 style={{ color: "red" }}>loading</h1>}
      {console.log(loading)}
    </div>
  );
};

export default App;
