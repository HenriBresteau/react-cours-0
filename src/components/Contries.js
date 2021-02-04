import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Contries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
    console.log(data);
  }, []);
  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <Card country={country} key={country.name} ></Card>
        ))}
      </ul>
    </div>
  );
};

export default Contries;
