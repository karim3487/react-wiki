import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Локация :
          <span className="text-primary">
            {" "}
            {name === "" ? "Неизвестно" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Измерение: {dimension === "" ? "Неизвестно" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Неизвестно" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-2 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Локация" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;