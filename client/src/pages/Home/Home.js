import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [crimeData, setCrimeData] = useState(null);
  const [postcode, setPostCode] = useState(null);
  const [loading, setLoading] = useState();

  console.log(crimeData, "test crime data");

  console.log(postcode, "test postcode");

  useEffect(() => {
    axios
      .get("https://api.getthedata.com/postcode/E18+1el")
      .then((response) => {
        setPostCode(response.data);
      })
      .catch((error) => {
        console.error(error, "Error fetching data");
      });

    axios
      .get(
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2022-01"
      )
      .then((response) => {
        setCrimeData(response.data);
      })
      .catch((error) => {
        console.error(error, "Error fetching data");
      });
  }, []);

  return (
    <div>
      <Header title={"UK Crime search"} />
      <SearchBar />
    </div>
  );
};

export default Home;
