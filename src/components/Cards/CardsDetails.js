import React from 'react';
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";


const CardDetails = () => {
  let {id} = useParams()

  let [fetchedData, updateFetchedData] = useState([]);
  let {name, image, location, origin, gender, species, status, type} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      updateFetchedData(data)
    })();
  }, [api]);


  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt={name} className="img-fluid"/>

        {(() => {
          if (status === 'Alive') {
            return (
              <div className="badge bg-success fs-5">
                {status}
              </div>
            );
          } else if (status === 'Dead') {
            return (
              <div className="badge bg-danger fs-5">
                {status}
              </div>
            );
          } else {
            return (
              <div className="badge bg-secondary fs-5">
                {status}
              </div>
            );
          }
        })()}

        <div className="content">
          <div className="fs-6">
            <span className="fw-bold">Пол: </span>{gender === "" ? "Неизвестно" : gender} <br/>
          </div>
          <div className="fs-6">
            <span className="fw-bold">Последняя локация: </span>{location?.name === "" ? "Неизвестно" : location?.name}
          </div>
          <div className="fs-6">
            <span className="fw-bold">Происхождение: </span>{origin?.name === "" ? "Неизвестно" : origin?.name}
          </div>
          <div className="fs-6">
            <span className="fw-bold">Вид: </span>{species === "" ? "Неизвестно" : species}
          </div>
          <div className="fs-6">
            <span className="fw-bold">Тип: </span>{type === "" ? "Неизвестно" : type}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardDetails;
