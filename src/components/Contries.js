import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Contries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOne] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        .then((res) => {
          setData(res.data);
          setPlayOne(false);
        });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = 30;
      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, playOnce]);
  return (
    <div className="countries">
      <ul className="countries-list">
        {sortedData.map((country) => (
          <Card country={country} key={country.name}></Card>
        ))}
      </ul>
    </div>
  );
};

export default Contries;
