import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {
  let clear = () => {
    setSpecies('');
    setPageNumber(1);
    setStatus('');
    setGender('');
    window.location.reload(false)
  }
  return (
    <div className="col-2">
      <div className="text-center fw-bold fs-4 mb-3">Фильтры</div>
      <div
        onClick={clear}
        style={{cursor: "pointer"}}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Очистить фильтры
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
      </div>
    </div>
  );
};

export default Filters;
