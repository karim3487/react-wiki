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
    <div className="col-lg-2 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
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
